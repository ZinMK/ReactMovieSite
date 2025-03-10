import { createRoot } from "react-dom/client";
import "./Css/index.css";
import "./Css/App.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
