
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage(
      "Authentication is not connected yet. This feature will be available after backend integration."
    );
  }

  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-[#F7F7FC] px-6 py-16">
      <div className="w-full max-w-md">

        {/* Login Card */}
        <div className="rounded-2xl border border-[#E9E9F1] bg-white p-8 shadow-sm sm:p-10">

          {/* Brand */}
          <Link
            href="/"
            className="mb-8 block text-center text-3xl font-extrabold tracking-tight"
          >
            <span className="text-[#6C4CF1]">Nexa</span>
            <span className="text-[#F04D9A]">Cart</span>
          </Link>

          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-2xl font-extrabold text-[#171725]">
              Welcome Back!
            </h1>

            <p className="text-sm text-[#77778B]">
              Sign in to access your NexaCart account.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#171725]"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9999AA]"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#E9E9F1] py-3 pl-11 pr-4 text-sm text-[#171725] outline-none transition focus:border-[#6C4CF1] focus:ring-2 focus:ring-[#6C4CF1]/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-[#171725]"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9999AA]"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-[#E9E9F1] py-3 pl-11 pr-12 text-sm text-[#171725] outline-none transition focus:border-[#6C4CF1] focus:ring-2 focus:ring-[#6C4CF1]/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9999AA] hover:text-[#6C4CF1]"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#6C4CF1] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#5939DF]"
            >
              Sign In
            </button>

            {/* Feedback */}
            {message && (
              <p
                role="status"
                className="rounded-lg bg-purple-50 p-3 text-sm leading-6 text-[#6C4CF1]"
              >
                {message}
              </p>
            )}
          </form>

          <div className="my-7 h-px bg-[#E9E9F1]" />

          <p className="text-center text-sm text-[#77778B]">
            New to NexaCart?
            <span className="ml-1 font-semibold text-[#6C4CF1]">
              Account registration coming soon.
            </span>
          </p>
        </div>

        {/* Back to Shop */}
        <div className="mt-6 text-center">
          <Link
            href="/shop"
            className="text-sm font-semibold text-[#77778B] transition hover:text-[#6C4CF1]"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
