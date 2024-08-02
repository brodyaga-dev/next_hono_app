import Image from "next/image";

import { signOut, auth } from "@/auth";
import NotAuthenticatedCard from '@/components/ui/NotAuthenticatedCard'
import Gallery from '@/components/ui/Gallery'

const getUserData = async (id: string) => {
  const response = await fetch(`/api/user/${id}`);
  return response.json();
};

export default async function AccountPage() {
  const session = await auth();
  if (!session) return <NotAuthenticatedCard/>;
  return <div className="mx-auto max-w-[70rem] w-full"><Gallery></Gallery></div>;
}
