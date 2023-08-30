import React from "react";

const ModalError = ({ className = "", children }) => {
  if (!children) return <></>;

  return <div>{children}</div>;
};

export default ModalError;
