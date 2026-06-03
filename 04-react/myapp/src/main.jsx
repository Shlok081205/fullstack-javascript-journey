import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RandomJoke from "./RandomJoke";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RandomJoke />
  </StrictMode>,
);
