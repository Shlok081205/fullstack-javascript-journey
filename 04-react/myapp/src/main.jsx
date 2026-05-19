import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Comp2 from "./Comp2";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Comp2 />
  </StrictMode>,
);
