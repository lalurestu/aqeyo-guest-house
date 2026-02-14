'use client';

// Next.js 15 App Router: params is a Promise

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { use } from 'react';

// Next.js 15 App Router: params is a Promise
export default function RoomFormPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const isNew = resolvedParams.id === 'new';
    const router = useRouter();

    const [formData, setFormData] = useState({
        slug: '',
        name: '',
        description: '',
        price: '',
        image: '',
        amenities: '', // Input as comma separated string
    });
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(!isNew);
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
        if (!isNew) {
            fetchRoom(resolvedParams.id);
        }
    }, [resolvedParams.id, isNew]);

    const fetchRoom = async (id: string) => {
        try {
            const res = await fetch(`/api/rooms/${id}`);
            const data = await res.json();
            if (res.ok) {
                setFormData({
                    ...data,
                    amenities: data.amenities ? JSON.parse(data.amenities).join(', ') : ''
                });
            } else {
                alert('Failed to load room data');
                router.push('/admin/rooms');
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

        // Format amenities to JSON string
        const amenitiesArray = formData.amenities.split(',').map(item => item.trim()).filter(Boolean);

        const data = new FormData();
        data.append('slug', formData.slug);
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('price', formData.price);
        data.append('amenities', JSON.stringify(amenitiesArray));
        // Keep existing image path if no new file is uploaded
        data.append('image', formData.image);

        if (file) {
            data.append('file', file);
        }

        try {
            const url = isNew ? '/api/rooms' : `/api/rooms/${resolvedParams.id}`;
            const method = isNew ? 'POST' : 'PUT';

            // Don't set Content-Type header manually when sending FormData, 
            // the browser sets it with the boundary automatically
            const res = await fetch(url, {
                method,
                body: data,
            });

            if (res.ok) {
                router.push('/admin/rooms');
                router.refresh();
            } else {
                const errorData = await res.json();
                alert(`Failed to save: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Error saving room', error);
            alert('An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    };

    if (fetching) return <div className="p-8 text-center text-gray-500">Loading room data...</div>;

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 font-serif mb-8">
                {isNew ? 'Create New Room' : 'Edit Room'}
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
                    <label className="block text-sm font-medium text-gray-700">Slug (Unique ID)</label>
                    <input
                        type="text"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        placeholder="e.g., deluxe-room"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Price (Display string)</label>
                    <input
                        type="text"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        placeholder="$100"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Image</label>
                    <div className="mt-1 flex items-center gap-4">
                        <div className="flex-1">
                            <input
                                type="text"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border bg-gray-50"
                                value={formData.image}
                                readOnly
                                placeholder="Image path will appear here"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="file"
                                id="image-upload"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        setFile(file);
                                        // Optional: Show a preview URL temporarily if you wanted (not implemented here to keep simple)
                                    }
                                }}
                            />
                            <label
                                htmlFor="image-upload"
                                className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                {file ? 'Change File' : 'Choose File'}
                            </label>
                        </div>
                    </div>
                    {file && <p className="mt-1 text-xs text-green-600">Selected: {file.name}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        required
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Amenities (Comma separated)</label>
                    <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                        value={formData.amenities}
                        onChange={(e) => setFormData({ ...formData, amenities: e.target.value })}
                        placeholder="WiFi, Pool, Breakfast"
                    />
                </div>

                <div className="flex justify-end pt-4">
                    <button
                        type="button"
                        onClick={() => router.push('/admin/rooms')}
                        className="mr-4 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-70 transition-colors"
                    >
                        {loading ? 'Saving...' : 'Save Room'}
                    </button>
                </div>
            </form>
        </div>
    );
}
