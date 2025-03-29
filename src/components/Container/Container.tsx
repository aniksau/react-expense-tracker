import Container from '@mui/material/Container';
import React from 'react';
import { HeroCarousel } from '../HeroCarousel/HeroCarousel';
import { TransactionsList } from '../TransactionsList/TransactionsList';
import { BottomNav } from '../BottomNav/BottomNav';

export const MainContainer = () => {

    return <main>
        <Container maxWidth="sm">
            <HeroCarousel />
            <TransactionsList />
            <BottomNav />
        </Container  >
    </main>
};