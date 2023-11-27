import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="w-full min-h-screen flex items-center justify-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return (
        <Navigate state={{ from: location }} to="/auth/login"></Navigate>
    );
};

export default PrivateRoute;
