import Container from '@mui/material/Container';
import React from 'react';
import { HeroCarousel } from '../HeroCarousel/HeroCarousel';

export const MainContainer = () => {

    return <main>
        <Container maxWidth="sm">
            <HeroCarousel />
        </Container  >
    </main>
};