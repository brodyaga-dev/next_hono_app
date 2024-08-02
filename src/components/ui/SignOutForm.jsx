"use client";
import { signOut } from "next-auth/react";

const SignOutForm = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="rounded-lg bg-background p-8 border bg-card text-card-foreground shadow-sm w-full max-w-md mx-auto">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold">Sign Out</h2>
          <p className="text-muted-foreground">
            Are you sure you want to sign out of your account?
          </p>

          {/* <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-primary-foreground hover:bg-red-500/80 h-10 px-4 py-2 w-full"
            type="submit"
          >
            Sign Out
          </button> */}
          <button
            onClick={() => signOut()}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-primary-foreground hover:bg-red-500/80 h-10 px-4 py-2 w-full"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignOutForm;
