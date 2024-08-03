"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState('');

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? '' : dropdown);
  };

  return (
    <aside className="w-64 bg-gray-900 text-gray-200 shadow-md flex flex-col sticky top-0 h-screen">
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">BRESS</h1>
      </div>
      <nav className="flex-1 px-2 space-y-2">
        <Link href="/admin/dashboard" className="flex items-center px-4 py-2 bg-gray-800 rounded-md text-white">
          <span className="ml-2">Dashboard</span>
        </Link>

        {/* Category Dropdown */}
        <div>
          <button
            onClick={() => toggleDropdown('category')}
            className="flex items-center px-4 py-2 hover:bg-gray-800 rounded-md w-full text-left"
          >
            <span className="ml-2">Manage Category</span>
            <svg
              className={`ml-auto transition-transform ${openDropdown === 'category' ? 'rotate-180' : 'rotate-0'}`}
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.648l3.71-3.42a.75.75 0 111.04 1.08l-4.25 3.916a.75.75 0 01-1.04 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
            </svg>
          </button>
          {openDropdown === 'category' && (
            <div className="pl-8 space-y-2">
              <Link href="/admin/category" className="block px-4 py-2 hover:bg-gray-800 rounded-md">
                All Categories
              </Link>
              <Link href="/admin/category/add" className="block px-4 py-2 hover:bg-gray-800 rounded-md">
                Add Category
              </Link>
            </div>
          )}
        </div>

        {/* Book Dropdown */}
        <div>
          <button
            onClick={() => toggleDropdown('book')}
            className="flex items-center px-4 py-2 hover:bg-gray-800 rounded-md w-full text-left"
          >
            <span className="ml-2">Manage Book</span>
            <svg
              className={`ml-auto transition-transform ${openDropdown === 'book' ? 'rotate-180' : 'rotate-0'}`}
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.648l3.71-3.42a.75.75 0 111.04 1.08l-4.25 3.916a.75.75 0 01-1.04 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
            </svg>
          </button>
          {openDropdown === 'book' && (
            <div className="pl-8 space-y-2">
              <Link href="/admin/manage_book" className="block px-4 py-2 hover:bg-gray-800 rounded-md">
                All Books
              </Link>
              <Link href="/admin/manage_book/add" className="block px-4 py-2 hover:bg-gray-800 rounded-md">
                Add Book
              </Link>
 
            </div>
          )}
        </div>

        {/* User Management Dropdown */}
        <div>
          <button
            onClick={() => toggleDropdown('user')}
            className="flex items-center px-4 py-2 hover:bg-gray-800 rounded-md w-full text-left"
          >
            <span className="ml-2">User Management</span>
            <svg
              className={`ml-auto transition-transform ${openDropdown === 'user' ? 'rotate-180' : 'rotate-0'}`}
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.648l3.71-3.42a.75.75 0 111.04 1.08l-4.25 3.916a.75.75 0 01-1.04 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
            </svg>
          </button>
          {openDropdown === 'user' && (
            <div className="pl-8 space-y-2">
              <Link href="/admin/manage_user" className="block px-4 py-2 hover:bg-gray-800 rounded-md">
                All Users
              </Link>
              <Link href="/admin/manage_user/add" className="block px-4 py-2 hover:bg-gray-800 rounded-md">
                Add User
              </Link>
 
            </div>
          )}
        </div>
      </nav>
      <div className="p-4 text-center border-t border-gray-700">
        <div className="flex items-center">
          <img src="https://via.placeholder.com/40" alt="User Avatar" className="rounded-full" />
          <div className="ml-3">
            <h2 className="text-sm font-medium">Emily Jonson</h2>
            <p className="text-xs text-gray-400">jonson@bress.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
