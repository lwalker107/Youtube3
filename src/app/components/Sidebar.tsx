import Link from 'next/link';
import { HomeIcon, ArrowTrendingUpIcon, BookOpenIcon, StarIcon } from '@heroicons/react/24/solid';

const Sidebar = () => {
  return (
    <aside className="w-32 bg-white text-gray h-screen p-4">
      <h2 className="text-xl mb-4">YouTube Clone</h2>
      <ul>
        <li className="flex items-center mb-2">
          <HomeIcon className="h-6 w-6 mr-2" />
          <Link href="/">Home</Link>
        </li>
        <li className="flex items-center mb-2">
          <ArrowTrendingUpIcon className="h-6 w-6 mr-2" />
          <Link href="/trending">Trending</Link>
        </li>
        <li className="flex items-center mb-2">
          <StarIcon className="h-6 w-6 mr-2" />
          <Link href="/favorites">Favorites</Link>
        </li>
        <li className="flex items-center mb-2">
          <BookOpenIcon className="h-6 w-6 mr-2" />
          <Link href="/history">History</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;