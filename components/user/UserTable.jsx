"use client";

import { useState } from 'react';
import Link from 'next/link';

const UserTable = () => {
  // Sample static data
  const [users, setUsers] = useState([
    { id: 1, username: 'john_doe', email: 'john@example.com', isActive: true, role: 'user' },
    { id: 2, username: 'jane_doe', email: 'jane@example.com', isActive: false, role: 'admin' },
    // Add more sample users as needed
  ]);

  const handleEdit = (id) => {
    console.log(`Edit user with id: ${id}`);
    // Implement edit logic here
  };

  const handleDelete = (id) => {
    console.log(`Delete user with id: ${id}`);
    // Implement delete logic here
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Active Status</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.username}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.isActive ? 'Active' : 'Inactive'}</td>
              <td className="py-2 px-4 border-b">{user.role}</td>
              <td className="py-2 px-4 border-b">
                <Link href="/admin/manage_user/edit/1">
                  <button
                  onClick={() => handleEdit(user.id)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded mr-2 hover:bg-yellow-700"
                  >
                  Edit
                </button>
                </Link>

                <button
                  onClick={() => handleDelete(user.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
