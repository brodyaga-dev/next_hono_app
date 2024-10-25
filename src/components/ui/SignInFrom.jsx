"use client";

import { signIns } from "@/actions/sign-in";
const SignInForm = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <form
        action={async (formData) => {
          signIns(formData);
        }}
        className="flex flex-col gap-y-2 rounded-lg bg-background border bg-card text-card-foreground shadow-sm w-full max-w-md mx-auto"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="whitespace-nowrap font-semibold tracking-tight text-2xl">
            Login
          </h3>
          <p className="text-sm text-muted-foreground">
            Enter your email and password to access your account.
          </p>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="emailLogin"
              placeholder="m@example.com"
              required
              type="email"
              name="email"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="passwordLogin"
              required
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="flex items-center p-6">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-400 text-primary-foreground hover:bg-green-400/80 h-10 px-4 py-2 w-full"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
