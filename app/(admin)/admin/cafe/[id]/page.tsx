'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { use } from 'react';

export default function MenuFormPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const isNew = resolvedParams.id === 'new';
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Signature Coffee', // Default
    });
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(!isNew);

    const categories = ['Signature Coffee', 'Main Courses', 'Desserts', 'Beverages'];

    useEffect(() => {
        if (!isNew) {
            fetchItem(resolvedParams.id);
        }
    }, [resolvedParams.id, isNew]);

    const fetchItem = async (id: string) => {
        try {
            const res = await fetch(`/api/menus/${id}`);
            const data = await res.json();
            if (res.ok) {
                setFormData(data);
            } else {
                alert('Failed to load menu data');
                router.push('/admin/cafe');
            }
        } catch (error) {
            console.error('Error', error);
        } finally {
            setFetching(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const url = isNew ? '/api/menus' : `/api/menus/${resolvedParams.id}`;
            const method = isNew ? 'POST' : 'PUT';

            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push('/admin/cafe');
                router.refresh();
            } else {
                const errorData = await res.json();
                alert(`Failed to save: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Error saving item', error);
            alert('An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    };

    if (fetching) return <div className="p-8 text-center text-gray-500">Loading data...</div>;

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 font-serif mb-8">
                {isNew ? 'New Menu Item' : 'Edit Menu Item'}
            </h1>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                        {categories.map(c => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                        {/* Allow custom category if needed, but select is safer for now */}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Price (Display string)</label>
                    <input
                        type="text"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        placeholder="$10"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        required
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                </div>

                <div className="flex justify-end pt-4">
                    <button
                        type="button"
                        onClick={() => router.push('/admin/cafe')}
                        className="mr-4 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-70 transition-colors"
                    >
                        {loading ? 'Saving...' : 'Save Item'}
                    </button>
                </div>
            </form>
        </div>
    );
}
