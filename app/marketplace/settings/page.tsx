'use client'

import React, { useState } from 'react';
import { Button } from '@mui/material';

const Settings: React.FC = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const handleToggleThemeMode = () => {
    setMode((currentMode) => (currentMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <Button onClick={handleToggleThemeMode}>Toggle Dark/Light Mode</Button>
  );
};

export default Settings;
