import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home";
import Guides from "../pages/Guides";
import Guide from "../pages/Guide";
import Tours from "../pages/Tours";
import Tour from "../pages/Tour";
import Auth from "../pages/Auth";
import Login from "../components/forms/Login";
import SignUp from "../components/forms/SignUp";
import PrivateRoute from "./PrivateRoute";
import ToursOfTypes from "../pages/ToursOfTypes";
import AllStories from "../pages/AllStories";
import GuideDashboard from "../pages/GuideDashboard";
import Dashboard from "../pages/Dashboard";
import GuideRoute from "./GuideRoute";
import AdminDashboard from "../pages/AdminDashboard";
import TouristDashboard from "../pages/TouristDashboard";
import TouristDashboardProfile from "../pages/TouristDashboardProfile";
import TouristDashboardBookings from "../pages/TouristDashboardBookings";
import TouristDashboardWishlist from "../pages/TouristDashboardWishlist";
import TouristDashboardAll from "../pages/TouristDashboardAll";
import GuideDashboardHome from "../pages/GuideDashboardHome";
import GuideDashboardProfile from "../pages/GuideDashboardProfile";
import GuideDashboardBooking from "../pages/GuideDashboardBooking";
import AdminDashboardProfile from "../pages/AdminDashboardProfile";
import AdminDashboardHome from "../pages/AdminDashboardHome";
import AdminDashboardAddPackage from "../pages/AdminDashboardAddPackage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            { path: "/", element: <Home></Home>, errorElement: <ErrorPage></ErrorPage>, },
            { path: "/about", element: <h1>About</h1> },
            { path: "/contact", element: <h1>Contact</h1> },
            { path: '/tours', element: <Tours></Tours> },
            { path: '/tours/types/:type', element: <ToursOfTypes></ToursOfTypes> },
            { path: '/tours/:id', element: <PrivateRoute><Tour></Tour></PrivateRoute> },
            { path: "/guides", element: <Guides></Guides> },
            { path: "/guides/:id", element: <Guide></Guide> },
            { path: "/stories", element: <AllStories></AllStories> },
            { path: "/community", element: <h1>Community</h1> },
            { path: "/blogs", element: <h1>Blogs</h1> },
            {
                path: "/dashboard", element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children: [
                    {
                        path: "tourist", element: <TouristDashboard></TouristDashboard>,
                        // path: 'tourist', element: <TouristDashboardProfile></TouristDashboardProfile>,
                        children: [
                            // { path: "", element: <TouristDashboardAll></TouristDashboardAll> },
                            { path: "", element: <TouristDashboardProfile></TouristDashboardProfile> },
                            { path: "bookings", element: <TouristDashboardBookings></TouristDashboardBookings> },
                            { path: 'wishlist', element: <TouristDashboardWishlist></TouristDashboardWishlist> }

                        ]
                    },
                    {
                        path: "guide", element: <GuideRoute><GuideDashboardHome></GuideDashboardHome></GuideRoute>,
                        children: [
                            { path: "", element: <GuideDashboardProfile></GuideDashboardProfile> },
                            { path: "myBookings", element: <GuideDashboardBooking></GuideDashboardBooking> },
                        ]
                    },
                    {
                        path: "admin", element: <AdminDashboardHome></AdminDashboardHome>,
                        children: [
                            { path: "", element: <AdminDashboardProfile></AdminDashboardProfile> },
                            { path: "addPackage", element: <AdminDashboardAddPackage></AdminDashboardAddPackage> },
                            { path: "manage", element: <AdminDashboard></AdminDashboard> }
                        ]
                    }
                ]
            },

            {
                path: "/auth",
                element: <Auth></Auth>,
                children: [
                    { path: "login", element: <Login></Login> },
                    { path: "signup", element: <SignUp></SignUp> }
                ]
            }
        ],
    },
]);


