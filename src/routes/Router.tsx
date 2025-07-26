// src/routes/Router.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "projects", element: <Projects /> },
        ],
    },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
