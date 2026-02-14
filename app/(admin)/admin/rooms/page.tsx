'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

interface Room {
    id: string;
    name: string;
    price: string;
    description: string;
}

export default function RoomsManagementPage() {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        try {
            const res = await fetch('/api/rooms');
            const data = await res.json();
            setRooms(data);
        } catch (error) {
            console.error('Failed to fetch rooms', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this room?')) return;

        try {
            const res = await fetch(`/api/rooms/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                fetchRooms();
            } else {
                alert('Failed to delete room');
            }
        } catch (error) {
            console.error('Error deleting room', error);
        }
    };

    if (loading) {
        return <div className="p-8 text-center text-gray-500">Loading rooms...</div>;
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 font-serif">Rooms Management</h1>
                <Link
                    href="/admin/rooms/new"
                    className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                    <FaPlus className="mr-2" />
                    Add Room
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {rooms.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                    No rooms found. Create one to get started.
                                </td>
                            </tr>
                        ) : (
                            rooms.map((room) => (
                                <tr key={room.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{room.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{room.price}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500 truncate max-w-xs">{room.description}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <Link
                                            href={`/admin/rooms/${room.id}`}
                                            className="text-blue-600 hover:text-blue-900 mr-4 inline-block"
                                        >
                                            <FaEdit className="inline" />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(room.id)}
                                            className="text-red-600 hover:text-red-900 inline-block"
                                        >
                                            <FaTrash className="inline" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
