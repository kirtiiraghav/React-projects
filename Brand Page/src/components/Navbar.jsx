import logo from '../assets/brand_logo.svg'
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="p-4 bg-white shadow-sm">
            <div className=' max-w-screen-lg mx-auto flex justify-between items-center '>
                {/* Logo */}
                <div className="logo">
                    <img src={logo} alt="logo" className="h-8" />
                </div>

                {/* Hamburger Icon */}
                <button className="text-2xl sm:hidden block" onClick={toggleMenu} aria-label="Toggle Menu">
                    ☰
                </button>

                {/* Menu */}
                <div className={`fixed top-0 right-0 w-[75vw] h-screen bg-white flex flex-col items-center justify-center space-y-6 text-xl transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} sm:static sm:flex sm:flex-row sm:space-y-0 sm:space-x-4 sm:h-auto sm:w-auto sm:bg-transparent sm:transform-none`}>
                    {/* Close Button */}
                    {isOpen && (
                        <button
                            className="absolute top-4 right-4 text-2xl"
                            onClick={closeMenu}
                            aria-label="Close Menu"
                        >
                            ✖
                        </button>
                    )}
                    {/* Menu Items */}
                    {['MENU', 'LOCATION', 'ABOUT', 'CONTACT'].map((item) => (
                        <li className='list-none text-base font-semibold' key={item}>
                            <a
                                href="#"
                                className="hover:text-[#D01C28]"
                                onClick={closeMenu} // Close the menu on click
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </div>

                {/* Login Button */}
                <button className='bg-[#D01C28] text-white px-4 py-1 font-semibold rounded hidden sm:block'>Login</button>
            </div>
        </nav>
    );
};

export default Navbar;
