import RegisterForm from "@/components/ui/RegisterForm";
import { auth } from "@/auth";

import SignInForm from "@/components/ui/SignInFrom";
import SignOutForm from "@/components/ui/SignOutForm";


export default async function Home() {
  const session = await auth();

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 max-w-[70rem] mx-auto w-full px-6 mt-16">
        <RegisterForm></RegisterForm>
        {session ? <SignOutForm></SignOutForm> : <SignInForm></SignInForm>}
      </div>
    </>
  );
}
