import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Comp from "./Comp";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Comp />
  </StrictMode>,
);
