import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./routes/Router.tsx";
import "bootstrap/dist/css/bootstrap.css";
// import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AppRouter />
    </StrictMode>
);
