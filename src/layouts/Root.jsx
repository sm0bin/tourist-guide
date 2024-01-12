import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import { useState } from 'react';

const Root = () => {
    const [theme, setTheme] = useState('light');
    const location = useLocation();
    const noFooter = location.pathname.includes('auth') || location.pathname.includes('dashboard');

    const localTheme = localStorage.getItem('theme') || 'light';
    if (theme !== localTheme) {
        setTheme(localTheme);
    }

    return (
        <main data-theme={theme}>
            <Header setTheme={setTheme} theme={theme}></Header>
            <Outlet></Outlet>
            {noFooter || <Footer></Footer>}
        </main>
    );
};

export default Root;