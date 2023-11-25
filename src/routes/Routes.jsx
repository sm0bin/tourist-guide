import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home";
import TourPackages from "../pages/TourPackages";
import TourGuides from "../pages/TourGuides";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/about", element: <h1>About</h1> },
            { path: "/contact", element: <h1>Contact</h1> },
            { path: "/login", element: <h1>Login</h1> },
            { path: "/register", element: <h1>Register</h1> },
            { path: '/tours', element: <TourPackages></TourPackages> },
            { path: '/tours/:id', element: <h1>Tour Details</h1> },
            { path: "/guides", element: <TourGuides></TourGuides> },
            { path: "/guides/:id", element: <h1>Guide Details</h1> },
        ],
    },
]);


