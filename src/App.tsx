import './App.css'
import React from 'react'
import { MainContainer } from './components/Container/Container'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TransactionProvider } from './context/TransactionContext';

const queryClient = new QueryClient();

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <TransactionProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <MainContainer />
        </ThemeProvider>
      </TransactionProvider>
    </QueryClientProvider>

  );
}

export default App;
