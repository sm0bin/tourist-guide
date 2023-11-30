import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [role, isRoleLoading] = useRole();
    const location = useLocation();

    if (loading && isRoleLoading) {
        return <div className="w-full min-h-screen flex items-center justify-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user && role === "admin") {
        return children;
    }

    return (
        <Navigate state={{ from: location }} to="/"></Navigate>
    );
};

export default AdminRoute;
