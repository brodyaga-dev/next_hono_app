// prisma/seed.js


import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {
  await prisma.$connect()

  const user = await prisma.user.create({
    data: {
      email: 'elsa@prisma.io',
      name: 'Elsa Prisma',
      password: '123'
    },
  })
  
   const users = await prisma.user.findMany()
   console.log(users)
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
