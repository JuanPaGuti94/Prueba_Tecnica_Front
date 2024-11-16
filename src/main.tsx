import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Front } from "./candidate-bo.component.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Front />
  </BrowserRouter>
);
