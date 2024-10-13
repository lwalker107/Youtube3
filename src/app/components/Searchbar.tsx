'use client'

import { useState } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { SearchPage } from '../pages/SearchPage'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

export default function SearchBar() {
    // Hooks for working with the URL and router
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    // Form that handles search input
    function handleSearch(term: string) {
        // URLSearchParams is a Web API that provides utility methods for manipulating the URL query parameters
        const params = new URLSearchParams(searchParams);

        if (term) {
            // If there's a search term, add it to the URL query parameters
            params.set('query', term);
          } else {
            // If the search term is empty, remove the 'query' parameter
            params.delete('query');
          }
          
          // Update the URL dynamically without refreshing the page
          // ${pathname} is the current path
          // as user types into search bar, params.toString() translates input into a URL-friendly format
          // line updates the URL with the user's search data without reloading the page
          replace(`${pathname}?${params.toString()}`);
        }

    return (
        <form 
        // Calls form when user submits
        onSubmit={(e) => {
            e.preventDefault();
            handleSearch((e.target as HTMLFormElement).search.value)
        }}
        className='relative flex w-full max-w-md'>
            <input
                id='search'
                name='search'
                type="text"
                // Input value is tied to the state
                defaultValue={searchParams.get('query')?.toString()}
                placeholder="Search.."
                className='w-full p-3 pl-10 rounded-full border-2 border-gray-300 focus:border-green-500 outline-none'
            />

            <button 
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-500">
                    <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
        </form>
    );
};
