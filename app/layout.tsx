import React from 'react';
import Header from './_components/header';
import Footer from './_components/footer';
import { Metadata } from 'next';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Header />
        {children}
      <Footer />
    </html>
  );
}