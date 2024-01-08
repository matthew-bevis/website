'use client'
import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import CustomizedInputBase from './search-bar';
import Link from 'next/link';
import AccountMenu from './accountMenu';
import './styling.css';


const Header: React.FC = () => {
  return (
    <header className='header'>
      <div style={{ display: 'flex', alignItems: 'center', padding: 'irem'}}>
        <Link href="/">
          <Image src='https://user.bulkitrade.com/assets/images/bulkitrade.png' alt="Bulkitrade Logo" width= '150' height= '50' style={{ marginRight: '50px', marginLeft: '10px'}} />
        </Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', width: 'auto', height: 'auto', maxWidth: '100%' }}>
        <CustomizedInputBase/>
        <Link href='/signin'>
          <Button variant="contained" color="primary" style={{ backgroundColor: '#034EA2', marginLeft: '20px', whiteSpace: 'nowrap', fontFamily: 'Helvetica Neue'}}>
            Sign-In
          </Button>
        </Link>
        <Link href="/register">
          <Button variant="contained" color="primary" style={{ backgroundColor: '#F68B1F', marginLeft: '10px', whiteSpace: 'nowrap', fontFamily: 'Helvetica Neue'}}>
            Sign-Up
          </Button>
        </Link>
        <AccountMenu />
      </div>
    </header>
  );
};



export default Header;