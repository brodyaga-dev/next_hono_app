import { auth } from "@/auth";
import Image from "next/image";
import UpdateForm from "@/components/ui/UpdateForm";

import NotAuthenticatedCard from "@/components/ui/NotAuthenticatedCard";

const getUserData = async (id: string) => {
  // const response = await fetch(`/api/user/${id}`);
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const result = await res.json();

  return result;
};

export default async function AccountPage() {
  const session = await auth();
  if (!session) {
    return <NotAuthenticatedCard />;
  }
  const user = await getUserData(session.user?.id || "");

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 max-w-[40rem] mx-auto w-full px-6 mt-16">
        <UpdateForm session={session}></UpdateForm>
      </div>
    </>
  );
}
