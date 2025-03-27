import { useState } from 'react'
import './App.css'
import React from 'react'
import { MainContainer } from './components/Container/Container'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MainContainer />
    </ThemeProvider>
  )
}

export default App;
