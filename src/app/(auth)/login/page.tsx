
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Gift } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage(
      "Authentication is not connected yet. This feature will be available after backend integration."
    );
  }

  return (
    <main className="grid min-h-screen grid-cols-1 bg-white lg:grid-cols-2">

      {/* LEFT PANEL */}
      <section className="relative flex min-h-[650px] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#6548EF] to-[#2878F0] px-8 py-12 text-white sm:px-12 lg:min-h-screen lg:px-[10%] lg:py-14">

        {/* Brand */}
        <Link
          href="/"
          className="w-fit text-3xl font-extrabold tracking-tight"
        >
          <span className="text-white">Nexa</span>
          <span className="text-[#FFC5E5]">Cart</span>
        </Link>

        {/* Welcome Content */}
        <div className="my-16 max-w-[560px] lg:my-0 lg:-translate-y-2">
          <h1 className="mb-5 text-4xl leading-[1.15] font-extrabold tracking-tight sm:text-5xl lg:text-[54px]">
            Welcome back to the future of tech
          </h1>

          <p className="max-w-[460px] text-base leading-7 font-medium sm:text-lg">
            Sign in to track your orders, save your wishlist and check out
            faster.
          </p>

          {/* Benefits */}
          <ul className="mt-9 space-y-3 text-sm font-bold sm:text-base">
            <li>✓ Free delivery on orders over $99</li>
            <li>✓ 2-year warranty on laptops and phones</li>
            <li>✓ 30-day easy returns</li>
          </ul>
        </div>

        {/* Promotional Offer */}
        <div className="flex items-center gap-5 rounded-[26px] bg-white/20 p-5 sm:p-6">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white/20">
            <Gift size={43} strokeWidth={1.8} />
          </div>

          <div>
            <span className="mb-2 inline-block rounded-full bg-[#FF9D36] px-3 py-1 text-xs font-bold text-[#171725]">
              Member offer
            </span>

            <h2 className="text-lg leading-snug font-bold sm:text-xl">
              Extra 10% off your first order
            </h2>
          </div>
        </div>
      </section>

      {/* RIGHT PANEL */}
      <section className="flex min-h-[650px] items-center justify-center bg-white px-6 py-16 sm:px-12 lg:min-h-screen lg:px-16">
        <div className="w-full max-w-[420px]">

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-4xl font-extrabold tracking-tight text-[#171725]">
              Sign in
            </h2>

            <p className="mt-2 text-base text-[#77778B]">
              Enter your details to access your account.
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
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@email.com"
                className="h-[52px] w-full rounded-[14px] border border-[#E2E2F0] bg-[#F7F7FB] px-5 text-sm text-[#171725] outline-none transition placeholder:text-[#85858D] focus:border-[#6C4CF1] focus:ring-2 focus:ring-[#6C4CF1]/10"
              />
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
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="h-[52px] w-full rounded-[14px] border border-[#E2E2F0] bg-[#F7F7FB] px-5 pr-20 text-sm text-[#171725] outline-none transition placeholder:text-[#85858D] focus:border-[#6C4CF1] focus:ring-2 focus:ring-[#6C4CF1]/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#6C4CF1] hover:text-[#5939DF]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember Me / Forgot Password */}
            <div className="flex items-center justify-between gap-3 py-1">
              <label className="flex cursor-pointer items-center gap-3 text-sm text-[#292938]">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  className="h-[18px] w-[18px] cursor-pointer accent-[#6C4CF1]"
                />
                Remember me
              </label>

              <button
                type="button"
                onClick={() =>
                  setMessage("Password recovery will be available after backend integration.")
                }
                className="text-sm font-semibold text-[#6C4CF1] hover:text-[#5939DF]"
              >
                Forgot password?
              </button>
            </div>

            {/* Sign In */}
            <button
              type="submit"
              className="h-[54px] w-full rounded-full bg-gradient-to-r from-[#6548EF] to-[#2878F0] text-sm font-bold text-white transition hover:brightness-105 active:scale-[0.99]"
            >
              Sign in
            </button>

            {/* Feedback */}
            {message && (
              <p
                role="status"
                className="rounded-xl bg-purple-50 p-3 text-sm leading-6 text-[#6C4CF1]"
              >
                {message}
              </p>
            )}
          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#E9E9F1]" />
            <span className="text-sm text-[#77778B]">or continue with</span>
            <div className="h-px flex-1 bg-[#E9E9F1]" />
          </div>

          
          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            {/* Google */}
            <button
              type="button"
              onClick={() =>
                setMessage("Google sign-in will be available after backend integration.")
              }
              className="flex h-12 items-center justify-center gap-3 rounded-full border border-[#E2E2F0] text-sm font-semibold text-[#171725] transition hover:bg-[#F7F7FB]"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  fill="#FFC107"
                  d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11c-.5 2.5-1.9 4.6-4 6v5.1h6.5c3.8-3.5 6.1-8.6 6.1-14.8z"
                />
                <path
                  fill="#FF3D00"
                  d="M24 44c5.5 0 10.1-1.8 13.5-4.7L31 34.2c-1.8 1.2-4.1 2-7 2-5.3 0-9.8-3.6-11.4-8.4H5.9v5.3C9.3 39.6 16.1 44 24 44z"
                />
                <path
                  fill="#4CAF50"
                  d="M12.6 27.8a12 12 0 0 1 0-7.6v-5.3H5.9a20 20 0 0 0 0 18.2z"
                />
                <path
                  fill="#1976D2"
                  d="M24 12c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6 29.5 4 24 4 16.1 4 9.3 8.4 5.9 14.9l6.7 5.3C14.2 15.6 18.7 12 24 12z"
                />
              </svg>
              Google
            </button>

            {/* Apple */}
            <button
              type="button"
              onClick={() =>
                setMessage("Apple sign-in will be available after backend integration.")
              }
              className="flex h-12 items-center justify-center gap-3 rounded-full border border-[#E2E2F0] text-sm font-semibold text-[#171725] transition hover:bg-[#F7F7FB]"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16.37 12.27c.02 2.08 1.83 2.77 1.85 2.78-.02.05-.29 1-.96 1.99-.58.86-1.19 1.72-2.14 1.74-.93.02-1.23-.56-2.29-.56-1.06 0-1.39.54-2.27.58-.91.03-1.6-.94-2.19-1.79-1.2-1.73-2.12-4.88-.89-7.01.61-1.06 1.7-1.73 2.89-1.75.9-.02 1.74.61 2.29.61.55 0 1.58-.76 2.66-.65.45.02 1.72.18 2.54 1.36-.07.04-1.52.89-1.49 2.7zM14.58 6.25c.48-.58.8-1.38.71-2.18-.69.03-1.53.46-2.03 1.04-.45.52-.84 1.33-.74 2.12.77.06 1.57-.39 2.06-.98z" />
              </svg>
              Apple
            </button>
          </div>


          {/* Create Account */}
          <p className="mt-8 text-center text-sm text-[#77778B]">
            New to NexaCart?

            <button
              type="button"
              onClick={() =>
                setMessage("Account registration will be available soon.")
              }
              className="ml-1 font-bold text-[#6C4CF1] hover:text-[#5939DF]"
            >
              Create an account
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}
