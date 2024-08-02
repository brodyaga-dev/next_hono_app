
import Image from 'next/image'
import { auth } from "@/auth";

async function getUsers(ids) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/users/except/${ids}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
   const result = await res.json();

  return result;
}


function calculateAge(dob) {
  const today = new Date();
  const birthDate = new Date(dob);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // Adjust age if today's date is before the birthday in the current year
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export default async function Gallery() {
  const session = await auth();
  const users = await getUsers(session.user.id);

  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <h1 className="text-2xl font-bold tracking-tight">
            Explore Our Users
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
          {users &&
            users.result.map((user) => (
              <div
                key={user.id}
                className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg"
              >
                <Image
                  src={user.profilePhoto}
                  alt={`${user.name}'s profile`}
                  width={300}
                  height={300}
                  className="[grid-area:stack] object-cover w-full aspect-square"
                />
                <div className="flex-1 [grid-area:stack] bg-black/30 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
                  <h3 className="font-semibold text-lg tracking-tight">
                    {user.name}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {`age: ${calculateAge(user.dateOfBirth)} year`}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
