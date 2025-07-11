// app/layout.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Adventure Aura',
  description: 'Explore the world with us',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
