'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Image from 'next/image';
import BulkiLogo from './img/bulkitrade-logo-official.png';

const Layout = ({children}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data from a local JSON file or an endpoint within your project
      const response = await fetch('/data/sample.json');
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <header style={{ display: 'flex' }}>
        <Image src={BulkiLogo} alt="Bulkitrade Logo" />
        {!isLoading && data ? (
          <Link href="/SignInPage">
            <a>
              <Button variant="contained" color="primary">
                Sign-In
              </Button>
            </a>
          </Link>
        ) : null}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
