'use server';
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

const signIns = async (formData: FormData) => {
  const formDataRaw = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  // TODO: add validation yourself
  // https://www.robinwieruch.de/next-forms/

  // TODO: implement sign in logic
  // we will do this later
  try {
    await signIn('credentials', formData, { redirectTo: "/dashboard" });
  } catch (error) {
    if (error instanceof AuthError) {
      return 'log in failed'
    }
    throw error;
  }

};

export { signIns };