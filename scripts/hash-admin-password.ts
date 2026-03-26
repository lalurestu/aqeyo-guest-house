import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    const plainPassword = 'HanyaAdminYangTau'
    const hashed = await bcrypt.hash(plainPassword, 10)

    const updated = await prisma.admin.update({
        where: { username: 'owneraqeyo' },
        data: { password: hashed },
    })

    console.log(`✅ Password for "${updated.username}" has been hashed and updated.`)
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())
