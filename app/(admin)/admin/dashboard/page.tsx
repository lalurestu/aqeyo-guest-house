import { PrismaClient } from '@prisma/client'
import { FaBed, FaCoffee } from 'react-icons/fa'

const prisma = new PrismaClient()

export default async function AdminDashboardPage() {
    const roomsCount = await prisma.room.count()
    const menuCount = await prisma.menu.count()
    // Add more stats if needed

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Rooms Card */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex items-center">
                    <div className="p-4 rounded-full bg-blue-50 text-blue-600 mr-4">
                        <FaBed className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500">Total Rooms</p>
                        <p className="text-2xl font-bold text-gray-900">{roomsCount}</p>
                    </div>
                </div>

                {/* Menu Card */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex items-center">
                    <div className="p-4 rounded-full bg-orange-50 text-orange-600 mr-4">
                        <FaCoffee className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500">Menu Items</p>
                        <p className="text-2xl font-bold text-gray-900">{menuCount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
