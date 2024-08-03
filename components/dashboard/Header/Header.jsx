// app/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-6">
      <div>
        <input type="text" placeholder="Search" className="px-4 py-2 border rounded-md" />
      </div>
      <div className="flex items-center space-x-4">
        <p>Monday, 6th March</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Card</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">List</button>
      </div>
    </header>
  );
};

export default Header;
