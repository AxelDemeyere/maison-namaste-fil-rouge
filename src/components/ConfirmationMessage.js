import React from "react";

const ConfirmationMessage = ({ message }) => {
  return (
    <div className="confirmation-message">
      <p>{message}</p>
    </div>
  );
};

export default ConfirmationMessage;
