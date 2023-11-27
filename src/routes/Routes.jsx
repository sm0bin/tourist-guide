import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home";
import TourPackages from "../pages/TourPackages";
import TourGuides from "../pages/TourGuides";
import Auth from "../pages/Auth";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import TourGuide from "../pages/TourGuide";
import Tour from "../pages/Tour";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/about", element: <h1>About</h1> },
            { path: "/contact", element: <h1>Contact</h1> },
            { path: '/tours', element: <TourPackages></TourPackages> },
            { path: '/tours/:id', element: <Tour></Tour> },
            { path: "/guides", element: <TourGuides></TourGuides> },
            { path: "/guides/:id", element: <TourGuide></TourGuide> },
            { path: "/community", element: <h1>Community</h1> },
            { path: "/blogs", element: <h1>Blogs</h1> },
            { path: "/dashboard", element: <PrivateRoute><h1>Dashboard</h1></PrivateRoute> },

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


