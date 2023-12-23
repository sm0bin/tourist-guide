import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

const Root = () => {
    const location = useLocation();

    const noFooter = location.pathname.includes('auth') || location.pathname.includes('dashboard');

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {noFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;