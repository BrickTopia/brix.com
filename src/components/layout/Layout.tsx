
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ThemeProvider } from '../theme/ThemeProvider';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="brik-theme">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
