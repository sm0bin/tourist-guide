import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/about", element: <h1>About</h1> },
            { path: "/contact", element: <h1>Contact</h1> },
        ],
    },
]);


