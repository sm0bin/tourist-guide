import { Outlet } from "react-router-dom";

const GuideDashboardHome = () => {
    return (
        <div className=" mx-4 md:mx-8 lg:mx-auto max-w-7xl my-32">
            <Outlet></Outlet>
        </div>
    );
};

export default GuideDashboardHome;