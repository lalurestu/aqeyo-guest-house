
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    // 1. Seed Admin
    const hashedPassword = await bcrypt.hash('admin123', 10)
    const admin = await prisma.admin.upsert({
        where: { username: 'admin' },
        update: {},
        create: {
            username: 'admin',
            password: hashedPassword,
        },
    })
    console.log({ admin })

    // 2. Seed Rooms
    const rooms = [
        {
            slug: "deluxe-double",
            name: "Deluxe Double Room",
            description: "A spacious room featuring a king-size bed, private balcony with garden views, and a modern en-suite bathroom.",
            price: "$85",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
            amenities: JSON.stringify(["King Bed", "Garden View", "En-suite Bathroom", "Free Wi-Fi"]),
        },
        {
            slug: "suite",
            name: "Executive Suite",
            description: "Experience luxury in our Executive Suite, offering a separate living area, kitchenette, and premium amenities.",
            price: "$120",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
            amenities: JSON.stringify(["King Bed", "Living Area", "Kitchenette", "Bathtub"]),
        },
        {
            slug: "family",
            name: "Family Room",
            description: "Perfect for families, this room includes two queen beds and ample space for everyone to relax comfortably.",
            price: "$100",
            image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop",
            amenities: JSON.stringify(["2 Queen Beds", "Spacious", "Smart TV", "Mini Fridge"]),
        },
    ]

    for (const room of rooms) {
        await prisma.room.upsert({
            where: { slug: room.slug },
            update: {},
            create: room,
        })
    }

    // 3. Seed Menu
    const menuItems = [
        // Signature Coffee
        { name: "Gula Aren Latte", price: "$4", desc: "Local palm sugar, fresh milk, espresso", category: "Signature Coffee" },
        { name: "Coconut Cold Brew", price: "$5", desc: "Cold brew coffee, coconut water, lime", category: "Signature Coffee" },
        { name: "Avocado Espresso", price: "$6", desc: "Creamy avocado blend topped with espresso", category: "Signature Coffee" },

        // Main Courses
        { name: "Nasi Goreng Special", price: "$8", desc: "Fried rice with chicken satay, fried egg, and crackers", category: "Main Courses" },
        { name: "Beef Rendang", price: "$12", desc: "Slow-cooked beef in rich coconut spice paste", category: "Main Courses" },
        { name: "Grilled Fish Jimbaran", price: "$14", desc: "Fresh catch with Balinese spices and sambal", category: "Main Courses" },

        // Desserts
        { name: "Pisang Goreng Cheese", price: "$4", desc: "Fried banana with cheese and chocolate drizzle", category: "Desserts" },
        { name: "Dadar Gulung", price: "$3", desc: "Green pancake rolls with sweet coconut filling", category: "Desserts" },
    ]

    for (const item of menuItems) {
        const exists = await prisma.menu.findFirst({
            where: { name: item.name, category: item.category }
        })

        if (!exists) {
            await prisma.menu.create({
                data: {
                    name: item.name,
                    description: item.desc,
                    price: item.price,
                    category: item.category
                }
            })
        }
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
