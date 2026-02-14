import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    try {
        const room = await prisma.room.findUnique({
            where: { id: id }
        })
        if (!room) return NextResponse.json({ error: 'Room not found' }, { status: 404 })
        return NextResponse.json(room)
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server error' }, { status: 500 })
    }
}

import { writeFile } from 'fs/promises'
import path from 'path'

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    try {
        const formData = await request.formData()
        const file = formData.get('file') as File | null
        let imagePath = formData.get('image') as string

        if (file) {
            const buffer = Buffer.from(await file.arrayBuffer())
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
            const ext = path.extname(file.name)
            const filename = `room-${uniqueSuffix}${ext}`

            const uploadDir = path.join(process.cwd(), 'public', 'assets', 'img', 'rooms')
            const filepath = path.join(uploadDir, filename)

            await writeFile(filepath, buffer)
            imagePath = `/assets/img/rooms/${filename}`
        }

        const room = await prisma.room.update({
            where: { id: id },
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
        console.error('Update room error:', error)
        return NextResponse.json({ error: 'Failed to update room' }, { status: 500 })
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    try {
        await prisma.room.delete({
            where: { id: id }
        })
        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete room' }, { status: 500 })
    }
}
