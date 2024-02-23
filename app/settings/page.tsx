import React, { useState } from 'react';
import { Button } from '@mui/material';
import { getTheme } from '../theme';
import { ThemeButtonProps } from './interface';

const Settings: React.FC<ThemeButtonProps> = ({ toggleThemeMode }) =>{
  const [mode, setMode] = useState<'light' | 'dark'>('light'); // Ensuring strict type for mode

  // Directly assign theme based on the current mode
  const theme = getTheme(mode === 'light' || mode === 'dark' ? mode : 'light');

  return (
    <Button onClick={toggleThemeMode}>Toggle Dark/Light Mode</Button>
  );
};

export default Settings;
