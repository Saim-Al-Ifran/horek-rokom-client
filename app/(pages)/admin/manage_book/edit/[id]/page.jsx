import React from 'react'
import EditBook from '@/components/book/EditBook'

export const metadata = {
  title: "Edit Book",
  description: "This is edit book  page",
};

const EditBookPage = () => {
  return (
       <div>
             <EditBook/>
       </div>
  )
}

export default EditBookPage