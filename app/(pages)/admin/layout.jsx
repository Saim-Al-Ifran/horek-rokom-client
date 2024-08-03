import Header from '@/components/dashboard/Header/Header';
import Sidebar from '@/components/dashboard/sidebar/Sidebar';
import '@/app/globals.css'; 

 

const Layout = ({ children }) => {
  return (
    <html lang="en">

      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 p-6">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
