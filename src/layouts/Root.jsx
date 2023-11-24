import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;