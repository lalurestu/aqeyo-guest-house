import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    try {
        const rooms = await prisma.room.findMany({
            orderBy: { createdAt: 'desc' }
        })
        return NextResponse.json(rooms)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch rooms' }, { status: 500 })
    }
}

import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(request: Request) {
    try {
        const formData = await request.formData()
        const file = formData.get('file') as File | null
        let imagePath = formData.get('image') as string || ''

        if (file) {
            const buffer = Buffer.from(await file.arrayBuffer())
            // Create a unique filename
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
            // Sanitize filename to avoid weird characters, though typically nice to keep extension
            const ext = path.extname(file.name)
            const filename = `room-${uniqueSuffix}${ext}`

            // Define path. Note: in production (Vercel etc.), local file system write might not persist. 
            // This works for persistent VS (local, VPS).
            const uploadDir = path.join(process.cwd(), 'public', 'assets', 'img', 'rooms')
            const filepath = path.join(uploadDir, filename)

            await writeFile(filepath, buffer)
            imagePath = `/assets/img/rooms/${filename}`
        }

        const room = await prisma.room.create({
            data: {
                slug: formData.get('slug') as string,
                name: formData.get('name') as string,
                description: formData.get('description') as string,
                price: formData.get('price') as string,
                image: imagePath,
                amenities: formData.get('amenities') as string,
            }
        })
        return NextResponse.json(room)
    } catch (error) {
        console.error('Create room error:', error)
        return NextResponse.json({ error: 'Failed to create room' }, { status: 500 })
    }
}
