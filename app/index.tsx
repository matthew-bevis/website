import React from 'react';
import Marketplace from './page'; // Replace with your main App component file
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import ReactDOM from 'react-dom/client';

// Use createRoot to render the main App component
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Marketplace />
    </ThemeProvider>
  </React.StrictMode>,
);