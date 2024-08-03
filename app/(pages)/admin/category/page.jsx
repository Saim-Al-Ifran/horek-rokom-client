 
import Head from 'next/head';
import CategoriesTable from '@/components/category/CategoriesTable'; // Adjust the import path accordingly

const CategoriesPage = () => {
  const categories = [
    {
      id: 1,
      title: 'Fiction',
      description: 'Books that contain fictional stories',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Non-Fiction',
      description: 'Books that are based on real facts and information',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Science',
      description: 'Books that are about scientific topics',
      image: 'https://via.placeholder.com/150',
    },
  ];



  return (
    <div>
      <Head>
        <title>All Categories</title>
        <meta name="description" content="View and manage all categories." />
      </Head>
      <CategoriesTable categories={categories} />
    </div>
  );
};

export default CategoriesPage;
