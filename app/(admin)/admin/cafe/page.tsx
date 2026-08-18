'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

interface Menu {
    id: string;
    name: string;
    price: string;
    category: string;
    description: string;
}

const CATEGORIES = ['Semua', 'Makanan', 'Minuman', 'Paket Se-Sele/Begibung', 'Snack', 'Dessert', 'Tambahan'];

const CATEGORY_COLORS: Record<string, string> = {
    'Makanan': 'bg-orange-100 text-orange-800',
    'Minuman': 'bg-blue-100 text-blue-800',
    'Paket Se-Sele/Begibung': 'bg-purple-100 text-purple-800',
    'Snack': 'bg-yellow-100 text-yellow-800',
    'Dessert': 'bg-pink-100 text-pink-800',
    'Tambahan': 'bg-gray-100 text-gray-800',
};

export default function CafeManagementPage() {
    const [menus, setMenus] = useState<Menu[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('Semua');

    useEffect(() => {
        fetchMenus();
    }, []);

    const fetchMenus = async () => {
        try {
            const res = await fetch('/api/menus');
            const data = await res.json();
            setMenus(data);
        } catch (error) {
            console.error('Failed to fetch menus', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Yakin ingin menghapus item ini?')) return;

        try {
            const res = await fetch(`/api/menus/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                fetchMenus();
            } else {
                alert('Gagal menghapus item');
            }
        } catch (error) {
            console.error('Error deleting item', error);
        }
    };

    const filteredMenus = activeCategory === 'Semua'
        ? menus
        : menus.filter(m => m.category === activeCategory);

    if (loading) {
        return <div className="p-8 text-center text-gray-500">Memuat menu...</div>;
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900 font-serif">Manajemen Menu Cafe</h1>
                <Link
                    href="/admin/cafe/new"
                    className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                    <FaPlus className="mr-2" />
                    Tambah Item
                </Link>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat
                                ? 'bg-primary text-white shadow-sm'
                                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                            }`}
                    >
                        {cat}
                        {cat !== 'Semua' && (
                            <span className="ml-1.5 text-xs opacity-70">
                                ({menus.filter(m => m.category === cat).length})
                            </span>
                        )}
                        {cat === 'Semua' && (
                            <span className="ml-1.5 text-xs opacity-70">({menus.length})</span>
                        )}
                    </button>
                ))}
            </div>

            {/* Menu Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deskripsi</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredMenus.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                    {activeCategory === 'Semua'
                                        ? 'Belum ada item menu. Tambahkan item pertama Anda!'
                                        : `Tidak ada item di kategori "${activeCategory}".`}
                                </td>
                            </tr>
                        ) : (
                            filteredMenus.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${CATEGORY_COLORS[item.category] ?? 'bg-gray-100 text-gray-800'}`}>
                                            {item.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.price}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{item.description}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <Link
                                            href={`/admin/cafe/${item.id}`}
                                            className="text-blue-600 hover:text-blue-900 mr-4 inline-block"
                                        >
                                            <FaEdit className="inline" />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(item.id)}
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
