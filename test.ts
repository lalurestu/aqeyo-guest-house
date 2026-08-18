import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const menus = await prisma.menu.findMany({ take: 5 });
  console.log(menus);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
