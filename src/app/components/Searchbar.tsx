'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { SearchPage } from '../pages/SearchPage'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

const SearchBar = () => {
    // State variable called searchTerm and set equal to empty string
    const [searchTerm, setSearchTerm] = useState('');
    // Helps change page when the user submits the search
    const router = useRouter();

    // Form that is ran when it is submitted
    const handleSearch = (e) => {
        // prevents page from refreshing when form submitted
        e.preventDefault();
        // checks to see if the user typed anything into search bar
        if (searchTerm) {
            // navigate to search page using searchTerm and makes sure the search is formatted correctly for the URL
            router.push(`/search?query=${encodeURIComponent(searchTerm)}`)
        }
    }

    return (
        <form 
        // Calls form when user submits
        onSubmit={handleSearch}
        className='flex'>
            <input
                type="text"
                // Input value is tied to the state
                value={searchTerm}
                // Updates searchTerm state whenever input changes
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search.."
                className='p-4 rounded-full border-4'
            />

            <button type='submit'>
                <MagnifyingGlassIcon className='size-10 text-green-700' />
            </button>
        </form>
    );
};

export default SearchBar;