import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Exp1 from "./Exp1";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Exp1 />
  </StrictMode>,
);
