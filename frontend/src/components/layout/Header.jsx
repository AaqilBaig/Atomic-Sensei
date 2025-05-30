"use client";

import Link from 'next/link';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-gray-900">
            Atomic Sensei
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-400 hover:text-gray-500">
            <BellIcon className="h-6 w-6" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
          </button>
          
          <Link
            href="/dashboard/profile"
            className="flex items-center space-x-2 text-sm text-gray-700 hover:text-gray-900"
          >
            <UserCircleIcon className="h-8 w-8" />
            <span className="hidden sm:block">Profile</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
