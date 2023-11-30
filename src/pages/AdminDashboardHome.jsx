import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminDashboardHome = () => {
    return (
        <div className=' mx-4 md:mx-8 lg:mx-auto max-w-7xl my-32'>
            <Outlet></Outlet>

        </div>
    );
};

export default AdminDashboardHome;