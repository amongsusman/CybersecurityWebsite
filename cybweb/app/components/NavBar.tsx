'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="h-1/14 w-full bg-black bg-opacity-80 text-white">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Logo or title */}
                <div className="text-2xl font-bold">CybrLearn</div>

                {/* Hamburger button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            {/* Smooth dropdown */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'
                }`}
                >
                <ul className="flex flex-col items-center space-y-3 py-4 text-lg bg-black bg-opacity-90 border-t border-gray-700">
                    <Link href="/triad" className="text-blue-400 hover:underline">
                    CIA Triad
                    </Link>
                    <Link href="/datastates" className="text-blue-400 hover:underline">
                    Data States
                    </Link>
                    <Link href="/auth" className="text-blue-400 hover:underline">
                    Authentication
                    </Link>
                    <Link href="/passwords" className="text-blue-400 hover:underline">
                    Passwords
                    </Link>
                    <Link href="/phishing" className="text-blue-400 hover:underline">
                    Phishing
                    </Link>
                    <Link href="/sengin" className="text-blue-400 hover:underline">
                    Social Engineering
                    </Link>
                    <Link href="/threats" className="text-blue-400 hover:underline">
                    Potential Threats
                    </Link>
                </ul>
            </div>
        </nav>
    );
}