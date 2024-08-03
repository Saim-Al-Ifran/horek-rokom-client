import AddNewUser from '@/components/user/AddNewUser';
import React from 'react'
export const metadata = {
  title: "Add Users",
  description: "This is add users page",
};
const AddUser = () => {
  return (
    <div>
        <AddNewUser/>
    </div>
  )
}

export default AddUser