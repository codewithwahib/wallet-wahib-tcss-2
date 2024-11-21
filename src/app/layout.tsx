// Import Navbar
import './globals.css';

export const metadata = {
  title: 'My Website',
  description: 'Website description here',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body>
        {/* Navbar included globally */}
        <main>{children}</main> {/* This renders content of each page */}
      </body>
    </html>
  );
};

export default Layout;


