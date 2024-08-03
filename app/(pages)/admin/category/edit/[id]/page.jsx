import React from 'react';
import EditCategory from '@/components/editCategory/EditCategory'; // Adjust the import path accordingly


export const metadata = {
  title: "Edit Category",
  description: "This is edit category page",
};

const EditCategoryPage = () => {
  
  const category = {
    title: 'Sample Category',
    description: 'This is a sample category description.',
    image: 'https://via.placeholder.com/300' // Example image URL
  };

  return (
    <div className="p-8">
      <EditCategory category={category} />
    </div>
  );
};

export default EditCategoryPage;
