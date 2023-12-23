import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import TouristProfile from "../components/shared/TouristProfile";
import useRole from "../hooks/useRole";

const Dashboard = () => {
    const { user } = useAuth();
    const { displayName, email, photoURL } = user;
    const [role, isRoleLoading] = useRole();

    return (
        <>
            {/* <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
                </div>
                <div className="drawer-side z-[60]">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>
                </div>
            </div> */}

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <div className="mx-6 my-24">
                        <Outlet></Outlet>
                    </div>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content py-32">
                        {/* <TouristProfile tourist={user}></TouristProfile> */}
                        <div className="mx-auto text-center">
                            <div className="avatar">
                                <div className="w-24 mask mask-squircle">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold">{displayName}</h2>
                            <h2 className="text-xl">{email}</h2>
                        </div>
                        <div className="divider"></div>
                        {/* Sidebar content here */}
                        {
                            (role === "admin") &&
                            <>
                                <li><NavLink to='/dashboard/admin'>My Profile</NavLink></li>
                                <li><NavLink to='/dashboard/admin/addPackage'>Add Package</NavLink></li>
                                <li><NavLink to='/dashboard/admin/manage'>Manage Users</NavLink></li>
                            </>
                        }
                        {
                            (role === "guide") &&
                            <>
                                <li><NavLink to='/dashboard/guide'>My Profile</NavLink></li>
                                <li><NavLink to='/dashboard/guide/myBookings'>My Assigned Tours</NavLink></li>
                            </>
                        }
                        {
                            (role === "tourist") &&
                            <>
                                <li><NavLink to='/dashboard/tourist'>My Profile</NavLink></li>
                                <li><NavLink to='/dashboard/bookings'>My Bookings</NavLink></li>
                                <li><NavLink to='/dashboard/wishlist'>My Wishlist</NavLink></li>
                            </>
                        }


                    </ul>

                </div>
            </div>

        </>
    );
};

export default Dashboard;