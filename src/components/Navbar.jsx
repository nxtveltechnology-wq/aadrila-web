import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AadrilaLogo from '../assets/aadrila-logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Industries', href: '#industries' },
        { name: 'Products', href: '#products' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'About Us', href: '#about' },
    ];

    return (
        <nav className={`fixed w-full z-999 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-6' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-3">
                        <img src={AadrilaLogo} alt="Aadrila Logo" className="h-10 w-auto" />
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm">
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-md hover:shadow-lg">
                        Get a Demo
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 md:hidden flex flex-col gap-4 border-t">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
                                {link.name}
                            </a>
                        ))}
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium w-full">
                            Get a Demo
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
