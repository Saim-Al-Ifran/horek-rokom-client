import '@/app/globals.css'; 
export const metadata = {
  title: 'Admin login',
  description: 'this page is for admin Login',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
