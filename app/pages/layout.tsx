'use client'
import Link from 'next/link';
import Button from '@mui/material/Button';
import Image from 'next/image';
import BulkiLogo from '../_img/bulkitrade-logo-official.png';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) 
{
  return (
    <div>
      <header style={{ display: 'flex' }}>
        <Image src={BulkiLogo} alt="Bulkitrade Logo" />
            <Link href='/sign-in-page'>
            <Button variant="contained" color="primary">
              Sign-In
            </Button>
            </Link>
            <Link href="/SignUpPage">
            <Button variant="outlined" color="primary">
              Sign-Up
            </Button>
            </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

