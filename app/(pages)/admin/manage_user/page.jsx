import UserTable from '@/components/user/UserTable';
import React from 'react'
export const metadata = {
  title: "All Users",
  description: "This is all users page",
};
const AllUsers = () => {
  return (
    <div>
         <UserTable/>
    </div>
  )
}

export default AllUsers