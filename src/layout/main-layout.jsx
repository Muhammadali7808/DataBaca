import React from 'react';
import { Footer } from '../layout/footer';
import { Header } from '../layout/header';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

