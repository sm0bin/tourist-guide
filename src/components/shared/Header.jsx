import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaRegUserCircle } from "react-icons/fa";
import useRole from "../../hooks/useRole";

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const [role] = useRole();
    console.log(role);


    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/tours">Tour Packages</NavLink></li>
        <li><NavLink to="/guides">Tour Guides</NavLink></li>
        <li><NavLink to="/stories">All Stories</NavLink></li>
        {/* <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li><NavLink to="/community">Community</NavLink></li> */}
    </>

    const handleSignOut = () => {
        logout()
            .then(() => {
                toast.success("User logged out successfully");
            }).catch((error) => {
                toast.error(error.message);
            });

    }
    return (


        <div className="navbar fixed top-0 inset-x-0 z-50 bg-white shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-info lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-base-100">
                        {navLinks}
                    </ul>
                </div>
                <NavLink to="/" className="hidden md:flex items-center gap-2">
                    <img src="/travel-logo.svg" className="w-12 h-12" alt="Tourist Guide Logo" />
                    <h1 className=" text-4xl text-left font-bold whitespace-nowrap text-blue-400">Tourist <span className="text-yellow-500">Guide</span></h1>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn btn-circle btn-ghost text-3xl m-1">
                            {
                                <div className="avatar">
                                    <div className="w-12 rounded-full border-blue-300 border-4">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                                ||
                                <FaRegUserCircle />
                            }
                        </label>

                        <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-black rounded-box ">
                            <div className="px-4 py-3 border-b">
                                <span className="block text-sm text-gray-90">{user?.displayName || "User"}</span>
                                <span className="block text-sm  text-gray-500 truncate">{user?.email}</span>
                            </div>
                            <ul className="py-2">
                                <li>
                                    {
                                        role === "tourist" && <NavLink to='/dashboard/tourist'>Dashboard</NavLink>
                                    }
                                    {
                                        role === "guide" && <NavLink to='/dashboard/guide'>Dashboard</NavLink>
                                    }
                                    {
                                        role === "admin" && <NavLink to='/dashboard/admin'>Dashboard</NavLink>
                                    }
                                </li>

                                <li>
                                    <button onClick={handleSignOut} className="">Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    : <NavLink to="/auth/login" className="btn btn-info">Login</NavLink>
                }
            </div>
        </div>

    );
};

export default Header;