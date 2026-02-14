import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    try {
        const json = await request.json()
        const menu = await prisma.menu.update({
            where: { id: id },
            data: json
        })
        return NextResponse.json(menu)
    } catch (error) {
        console.error('Update menu error:', error)
        return NextResponse.json({ error: 'Failed to update menu' }, { status: 500 })
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    try {
        await prisma.menu.delete({
            where: { id: id }
        })
        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete menu' }, { status: 500 })
    }
}
