import React from 'react';
import TouristProfile from '../components/shared/TouristProfile';
import useAuth from '../hooks/useAuth';

const AdminDashboardProfile = () => {
    const { user } = useAuth();

    return (
        <div>
            <TouristProfile tourist={user}></TouristProfile>
        </div>
    );
};

export default AdminDashboardProfile;