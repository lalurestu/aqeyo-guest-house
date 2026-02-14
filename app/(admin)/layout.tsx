'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaHome, FaBed, FaCoffee, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import "../globals.css";

export default function AdminLayout(props: any) {
    const { children } = props;
    const pathname = usePathname();
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // If login page, don't show layout elements
    if (pathname === '/admin/login') {
        return (
            <html lang="en">
                <body>
                    {children}
                </body>
            </html>
        );
    }

    const handleLogout = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
            router.push('/admin/login');
            router.refresh();
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    const navItems = [
        { name: 'Dashboard', href: '/admin/dashboard', icon: FaHome },
        { name: 'Rooms', href: '/admin/rooms', icon: FaBed },
        { name: 'Cafe Menu', href: '/admin/cafe', icon: FaCoffee },
    ];

    return (
        <html lang="en">
            <body>
                <div className="min-h-screen bg-gray-100 flex">
                    {/* Mobile Sidebar Toggle */}
                    <div className="fixed top-4 left-4 z-50 md:hidden">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 bg-white rounded-md shadow-md text-gray-700"
                        >
                            {isSidebarOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Sidebar */}
                    <aside
                        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-auto ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                            }`}
                    >
                        <div className="flex flex-col h-full">
                            <div className="p-6 border-b">
                                <h1 className="text-2xl font-bold text-gray-800 font-serif">AQEYO</h1>
                                <p className="text-sm text-gray-500">Admin Dashboard</p>
                            </div>

                            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                                {navItems.map((item) => {
                                    const isActive = pathname.startsWith(item.href);
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`flex items-center p-3 rounded-lg transition-colors ${isActive
                                                ? 'bg-primary/10 text-primary font-semibold'
                                                : 'text-gray-600 hover:bg-gray-50'
                                                }`}
                                        >
                                            <item.icon className={`mr-3 ${isActive ? 'text-primary' : 'text-gray-400'}`} />
                                            {item.name}
                                        </Link>
                                    )
                                })}
                            </nav>

                            <div className="p-4 border-t">
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center w-full p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                    <FaSignOutAlt className="mr-3" />
                                    Logout
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 overflow-x-hidden overflow-y-auto w-full">
                        <div className="container mx-auto px-6 py-8">
                            {children}
                        </div>
                    </main>

                    {/* Overlay for mobile sidebar */}
                    {isSidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black/20 z-30 md:hidden"
                            onClick={() => setIsSidebarOpen(false)}
                        />
                    )}
                </div>
            </body>
        </html>
    );
}
