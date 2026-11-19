import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

import { UsersService } from "../users/users.service.js";
import { RegisterDto } from "./dto/register.dto.js";
import { LoginDto } from "./dto/login.dto.js";

@Injectable()
export class AuthService {
    constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    ) {}

    async register(registerDto: RegisterDto) {
    const {
        firstName,
        lastName,
        email,
        password,
        phone,
    } = registerDto;

    const existingUser = await this.usersService.findByEmail(email);

    if (existingUser) {
        throw new ConflictException(
        "An account with this email already exists",
        );
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await this.usersService.create({
        firstName,
        lastName,
        email,
        passwordHash,
        phone,
    });

    const { passwordHash: _, ...safeUser } = user;

    return safeUser;
    }


    async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.usersService.findByEmail(email);

    if (!user || !user.isActive) {
        throw new UnauthorizedException("Invalid email or password");
    }

    const passwordMatches = await bcrypt.compare(
        password,
        user.passwordHash,
    );

    if (!passwordMatches) {
        throw new UnauthorizedException("Invalid email or password");
    }

    const payload = {
        sub: user.id,
        email: user.email,
        role: user.role,
    };

    const accessToken = await this.jwtService.signAsync(payload);

    const { passwordHash: _, ...safeUser } = user;

    return {
        accessToken,
        tokenType: "Bearer",
        expiresIn: 3600,
        user: safeUser,
    };
    }

}
