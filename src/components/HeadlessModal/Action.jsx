import React from "react";

const ModalAction = ({ children, disabled, main = false, ...props }) => {
  return (
    <button {...props} disabled={disabled}>
      {children}
    </button>
  );
};

export default ModalAction;
