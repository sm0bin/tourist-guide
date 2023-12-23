import useAuth from '../../../hooks/useAuth';
import TouristProfile from '../../shared/TouristProfile';

const AdminDashboardProfile = () => {
    const { user } = useAuth();

    return (
        <div>
            <TouristProfile tourist={user}></TouristProfile>
        </div>
    );
};

export default AdminDashboardProfile;