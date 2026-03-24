'use client'; // Клиентский компонент (нужен для интерактивности)

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: 'Главная', href: '/' },
        { name: 'О нас', href: '/about' },
        { name: 'Контакты', href: '/contact' },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
            {/* Логотип */}
            <Link href="/" className="text-2xl font-bold text-blue-600">
                MyApp
            </Link>

            {/* Десктопное меню */}
            <div className="hidden md:flex space-x-8">
                {navigation.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-colors ${
                    pathname === item.href
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                >
                    {item.name}
                </Link>
                ))}
            </div>

            {/* Мобильное меню (бургер) */}
            <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            </div>

            {/* Мобильное выпадающее меню */}
            {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
                {navigation.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`block py-2 ${
                    pathname === item.href
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    {item.name}
                </Link>
                ))}
            </div>
            )}
        </nav>
        </header>
    );
}

export { Header };