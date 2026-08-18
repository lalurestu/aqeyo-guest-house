import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    try {
        const menus = await prisma.menu.findMany({
            orderBy: { category: 'asc' }
        })
        return NextResponse.json(menus)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch menus' }, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const json = await request.json()
        const menu = await prisma.menu.create({
            data: json
        })
        return NextResponse.json(menu)
    } catch (error) {
        console.error('Create menu error:', error)
        return NextResponse.json({ error: 'Failed to create menu' }, { status: 500 })
    }
}
