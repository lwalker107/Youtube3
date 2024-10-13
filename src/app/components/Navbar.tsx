'use client';

import { useState } from 'react'
import SearchBar from './Searchbar';
import Logo from './Logo';
import Link from 'next/link';
import { VideoCameraIcon, BellIcon, UserCircleIcon } from '@heroicons/react/16/solid';
import ProfileIcon from './ProfileIcon';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className='flex items-center justify-between px-4 py-2 bg-white shadow-md fixed w-full top-0 z-50'>
        {/* Left Section - Logo */}
        <div>
            <Link href='/'>
                <Logo />
            </Link>
        </div>

        {/* Center Section - Search Bar */}
        <div className='flex-grow mx-8'>
            <SearchBar />
        </div>
        
        {/* Right Section - User Interaction Buttons */}
        <div className='flex items-center space-x-4'>
            {/* Upload Video Icon */}
            <button className='text-gray-700 hover:text-green'>
                <VideoCameraIcon className="h-5 w-5"/>
            </button>

            {/* Notifications Icon */}
            <button className="text-gray-700 hover:text-black">
                <BellIcon className="h-5 w-5"/>
            </button>

            {/* Profile or Login */}
            {isLoggedIn ? (
                <div className='flex items space-x-2'>
                    <UserCircleIcon className='text-gray-700 hover:text-black' />
                    {/* Profile name */}
                    <span className="hidden sm:block">Landen Walker</span>
                </div>
            ) : (
                <button className='bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700'>
                    Log In
                </button>
            )
        }

        </div>
    </header>
);
}

export default Navbar