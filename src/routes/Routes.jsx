import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
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
// import GuideDashboard from "../pages/GuideDashboard";
import Dashboard from "../pages/Dashboard";
import GuideRoute from "./GuideRoute";
import AdminDashboard from "../components/dashboard/admin/AdminDashboard";
// import TouristDashboard from "../pages/TouristDashboard";
import TouristDashboardProfile from "../components/dashboard/tourist/TouristDashboardProfile";
import TouristDashboardBookings from "../components/dashboard/tourist/TouristDashboardBookings";
import TouristDashboardWishlist from "../components/dashboard/tourist/TouristDashboardWishlist";
// import TouristDashboardAll from "../pages/TouristDashboardAll";
import GuideDashboardHome from "../components/dashboard/guide/GuideDashboardHome";
import GuideDashboardProfile from "../components/dashboard/guide/GuideDashboardProfile";
import GuideDashboardBooking from "../components/dashboard/guide/GuideDashboardBooking";
import AdminDashboardProfile from "../components/dashboard/admin/AdminDashboardProfile";
import AdminDashboardHome from "../components/dashboard/admin/AdminDashboardHome";
import AdminDashboardAddPackage from "../components/dashboard/admin/AdminDashboardAddPackage";
import ErrorPage from "../pages/ErrorPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: '/tours', element: <Tours></Tours> },
            { path: '/tours/types/:type', element: <ToursOfTypes></ToursOfTypes> },
            { path: '/tours/:id', element: <PrivateRoute><Tour></Tour></PrivateRoute> },
            { path: "/guides", element: <Guides></Guides> },
            { path: "/guides/:id", element: <Guide></Guide> },
            { path: "/stories", element: <AllStories></AllStories> },

            // { path: "/about", element: <h1>About</h1> },
            // { path: "/contact", element: <h1>Contact</h1> },
            // { path: "/community", element: <h1>Community</h1> },
            // { path: "/blogs", element: <h1>Blogs</h1> },

            // Dashboard Routes
            {
                path: "/dashboard", element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children: [
                    { path: "tourist", element: <TouristDashboardProfile></TouristDashboardProfile> },
                    { path: "bookings", element: <TouristDashboardBookings></TouristDashboardBookings> },
                    { path: 'wishlist', element: <TouristDashboardWishlist></TouristDashboardWishlist> },

                    // { path: "guide", element: <GuideRoute><GuideDashboardHome></GuideDashboardHome></GuideRoute> },
                    { path: "guide", element: <GuideDashboardProfile></GuideDashboardProfile> },
                    { path: "myBookings", element: <GuideDashboardBooking></GuideDashboardBooking> },

                    { path: "admin", element: <AdminDashboardProfile></AdminDashboardProfile> },
                    { path: "addPackage", element: <AdminDashboardAddPackage></AdminDashboardAddPackage> },
                    { path: "manage", element: <AdminDashboard></AdminDashboard> }

                ]
            },

            // Auth Routes
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


