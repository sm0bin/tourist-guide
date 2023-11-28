import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home";
import Guides from "../pages/Guides";
import Guide from "../pages/Guide";
import Tours from "../pages/Tours";
import Tour from "../pages/Tour";
import Auth from "../pages/Auth";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import PrivateRoute from "./PrivateRoute";
import ToursOfTypes from "../pages/ToursOfTypes";
import TouristDashboard from "../pages/TouristDashboard";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/about", element: <h1>About</h1> },
            { path: "/contact", element: <h1>Contact</h1> },
            { path: '/tours', element: <Tours></Tours> },
            { path: '/tours/types/:type', element: <ToursOfTypes></ToursOfTypes> },
            { path: '/tours/:id', element: <PrivateRoute><Tour></Tour></PrivateRoute> },
            { path: "/guides", element: <Guides></Guides> },
            { path: "/guides/:id", element: <Guide></Guide> },
            { path: "/community", element: <h1>Community</h1> },
            { path: "/blogs", element: <h1>Blogs</h1> },
            { path: "/dashboard", element: <PrivateRoute><TouristDashboard></TouristDashboard></PrivateRoute> },

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


