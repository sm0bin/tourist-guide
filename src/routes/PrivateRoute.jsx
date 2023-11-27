import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="text-center min-h-[70vh] flex items-center justify-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return (
        <Navigate state={{ from: location }} to="/login"></Navigate>
    );
};

export default PrivateRoute;
