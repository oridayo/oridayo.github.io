// src/routes/Router.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Library from "../pages/Library";
import V2 from "../V2";
import V2Home from "../pages/v2/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "v3", element: <Home /> },
            { path: "projects", element: <Projects /> },
            { path: "library", element: <Library /> },
            { path: "contact", element: <Contact /> },
        ],
    },
    {
        path: "/v2",
        element: <V2 />,
        children: [
            { index: true, element: <V2Home /> },
            { path: "projects", element: <Projects /> },
            { path: "library", element: <Library /> },
            { path: "contact", element: <Contact /> },
        ]
    },
    // {
    //     path: "v1",
    //     element: <V1 />,
    //     children: [
    //         { index: true, element: <V1Home /> },
    //     ]
    // },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
