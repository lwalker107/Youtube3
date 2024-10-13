import React from 'react'
import SearchBar from './Searchbar';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className='flex items-center p-5'>
        <Logo />
        <SearchBar />
    </nav>
);
}

export default Navbar