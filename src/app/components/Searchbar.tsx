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
        className='flex'>
            <input
                id='search'
                name='search'
                type="text"
                // Input value is tied to the state
                defaultValue={searchParams.get('query')?.toString()}
                placeholder="Search.."
                className='p-4 rounded-full border-4'
            />

            <button type='submit'>
                <MagnifyingGlassIcon className='size-10 text-green-700' />
            </button>
        </form>
    );
};
