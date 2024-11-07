import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AgeCalculator from "./AgeCalculator.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AgeCalculator/>
  </StrictMode>
);
