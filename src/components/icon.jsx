import React from "react";

export default function Icon() {
  return (
    <div className="icon">
      <img className="logo" src={window.location.origin + '/img/logo.png'} alt="Millionaire Logo" />
    </div>
  );
}
