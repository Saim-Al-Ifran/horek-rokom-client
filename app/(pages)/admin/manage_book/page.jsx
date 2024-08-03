 
import Head from 'next/head';
import BooksTable from '@/components/book/BookTable';
 
export const metadata = {
  title: "All Books",
  description: "This is All books page",
};

const AllBooks= () => {

  const  books  = [
    {
      id: 1,
      title: 'Book Title 1',
      author: 'Author 1',
      description: 'Description of Book 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Book Title 2',
      author: 'Author 2',
      description: 'Description of Book 2',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Book Title 3',
      author: 'Author 3',
      description: 'Description of Book 3',
      image: 'https://via.placeholder.com/150',
    },
  ];

  
  return (
    <div>
      <Head>
        <title>All Books</title>
        <meta name="description" content="View and manage all books." />
      </Head>
      <BooksTable books={books}  />
    </div>
  );
};

export default AllBooks;
