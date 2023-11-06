'use client'
import * as React from 'react';
import Image from 'next/image';
import BulkiLogo from '../img/bulkitrade-logo-official.png';
import Button from '@mui/material/Button';
import {useRouter} from 'next/navigation';
import { ReactNode } from 'react';


type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  const SignIn = () => {
    router.push('../pages/SignInPage');
  };

  const SignUp = () => {
    router.push('/SignUpPage');
  };
  return (
    <div>
      <header style={{display: 'flex'}}>
        <Image src={BulkiLogo} alt="Bulkitrade Logo" />
          <Button variant="contained" color="primary" onClick={SignIn}>
            Sign-In
          </Button>
      </header>
      <main>{children}</main>
      <footer>
        {/* Add footer content here */}
      </footer>
    </div>
  );
};

export default Layout;