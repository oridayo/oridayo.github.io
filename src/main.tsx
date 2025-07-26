import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BrowserRouter from "./routes/Router.tsx";
import "bootstrap/dist/css/bootstrap.css";
// import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter />
    </StrictMode>
);
