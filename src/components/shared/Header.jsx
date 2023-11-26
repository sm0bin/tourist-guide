import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
    // const navLinks = [
    //     { label: 'HOME', path: '/' },
    //     { label: 'CONTACT US', path: '/contact' },
    //     { label: 'DASHBOARD', path: '/dashboard' },
    //     { label: 'OUR MENU', path: '/menu' },
    //     { label: 'OUR SHOP', path: '/shop' },
    //     { label: 'SIGN OUT', path: '/signout' },
    // ];
    const { user, logout } = useContext(AuthContext);

    // const { displayName, email, photoURL } = user || null;

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/tours">Tour Packages</NavLink></li>
        <li><NavLink to="/guides">Tour Guides</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li><NavLink to="/community">Community</NavLink></li>
        {/* {
            user ?
                <li><NavLink to="/signout">Sign Out</NavLink></li> :
                <li><NavLink to="/auth">Sign In</NavLink></li>
        } */}
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
                    <label tabIndex={0} className="btn btn-warning lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-black/50 backdrop-blur-md">
                        {navLinks}
                    </ul>
                </div>
                <NavLink to="/" className="hidden md:flex gap-2">
                    <img src="/travel-logo.svg" className="w-12 h-12" alt="Tourist Guide Logo" />
                    <h1 className=" text-4xl text-left font-bold whitespace-nowrap dark:text-white">Tourist Guide</h1>
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
                                    <div className="w-8 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                                ||
                                <FaRegUserCircle />
                            }
                        </label>

                        <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-black rounded-box ">
                            <div className="px-4 py-3 border-b">
                                <span className="block text-sm text-gray-900 dark:text-white">{user?.displayName || "User"}</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                            </div>
                            <ul className="py-2">
                                <li>
                                    <a>Dashboard</a>
                                </li>
                                <li>
                                    <a>Settings</a>
                                </li>
                                <li>
                                    <a>Earnings</a>
                                </li>
                                <li>
                                    <button onClick={handleSignOut} className="">Sign out</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    // <button onClick={handleSignOut} className="btn btn-warning">Sign Out</button> 
                    : <NavLink to="/auth/login" className="btn btn-info">Login</NavLink>



                }
            </div>
        </div>

    );
};

export default Header;