import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import My from "./routing/My.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <My />
  </StrictMode>,
);
