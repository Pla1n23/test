import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

export const AppProvider = ({ children }) => {
  return (
    <StrictMode>
      <BrowserRouter>{children}</BrowserRouter>
    </StrictMode>
  );
};
