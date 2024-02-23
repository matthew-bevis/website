'use client'

import React from 'react';
import Header from './_components/header';
import Footer from './_components/footer';

import { useEffect } from 'react';


export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    
    useEffect(() => {
      document.title = "Bulkitrade";
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      //@ts-ignore
      link.type = 'image/x-icon';
      //@ts-ignore
      link.rel = 'icon';
      //@ts-ignore
      link.href = "https://bulkitrade.com/wp-content/uploads/2021/04/cropped-bulkitrade-icon-32x32.png";
      document.head.appendChild(link);
  }, []);
  return (
    <html lang="en">
      <body style={{margin: '0', padding: '0', maxWidth: '100%', maxHeight: '100%', fontFamily: 'Helvetica'}}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}