import Container from '@mui/material/Container';
import React from 'react';
import { HeroCarousel } from '../HeroCarousel/HeroCarousel';
import { TransactionsList } from '../TransactionsList/TransactionsList';
import { BottomNav } from '../BottomNav/BottomNav';
import { useTransactions } from '../../hooks/useTransactions';
import { Welcome } from '../Welcome/Welcome';

export const MainContainer = () => {
    const { transactions, isLoading } = useTransactions();

    return <main>
        <Container maxWidth="md">
            {transactions.length ?
                <>            <HeroCarousel />
                    <TransactionsList />
                    <BottomNav />
                </>
                :
                <Welcome />
            }

        </Container  >
    </main>
};