import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import TouristProfile from "../components/shared/TouristProfile";
import useRole from "../hooks/useRole";
import { getRoleBadgeColor } from "../components/utilities/Functions";

const Dashboard = () => {
    const { user } = useAuth();
    const { displayName, email, photoURL } = user;
    const [role, isRoleLoading] = useRole();

    return (
        <>
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
                        <div className="mx-auto text-center">
                            <div className="avatar">
                                <div className="w-24 mask mask-squircle">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <div className={`badge mt-2 capitalize block mx-auto badge-lg ${getRoleBadgeColor(role)}`}>{role}</div>
                            <h2 className="text-xl font-bold mt-2">{displayName}</h2>
                            <h2 className="text-lg">{email}</h2>
                        </div>
                        <div className="divider"></div>
                        {/* Sidebar content here */}
                        {
                            (role === "admin") &&
                            <>
                                <li><NavLink to='/dashboard/admin'>My Profile</NavLink></li>
                                <li><NavLink to='/dashboard/addPackage'>Add Package</NavLink></li>
                                <li><NavLink to='/dashboard/manage'>Manage Users</NavLink></li>
                            </>
                        }
                        {
                            (role === "guide") &&
                            <>
                                <li><NavLink to='/dashboard/guide'>My Profile</NavLink></li>
                                <li><NavLink to='/dashboard/myBookings'>My Assigned Tours</NavLink></li>
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