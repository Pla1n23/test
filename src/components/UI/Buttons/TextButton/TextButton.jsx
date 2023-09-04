import React from "react";
import style from "./style.module.css";

/**
 * @param mode - 'primary' | 'secondary'
 */
export const TextButton = ({ children, mode, ...props }) => {
  return (
    <button {...props} className="button">
      {children}
    </button>
  );
};
