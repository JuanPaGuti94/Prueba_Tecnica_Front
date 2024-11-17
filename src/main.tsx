import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Front } from "./front.tsx"
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Front />
  </BrowserRouter>
);
