import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaRegUserCircle } from "react-icons/fa";
import useRole from "../../hooks/useRole";

const Header = ({ setTheme, theme }) => {
    const { user, logout } = useContext(AuthContext);
    const [role] = useRole();
    console.log(role);

    const handleThemeChange = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    }


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


        <nav className="navbar fixed top-0 inset-x-0 z-50 bg-base-300 shadow">
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

                <label className="swap swap-rotate border rounded-full p-2 mr-2">

                    {/* this hidden checkbox controls the state */}
                    <input onClick={handleThemeChange} type="checkbox" />

                    {/* sun icon */}
                    <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>

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
        </nav>

    );
};

export default Header;