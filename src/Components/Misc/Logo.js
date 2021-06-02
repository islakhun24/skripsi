import React from "react";

function Logo(props) {
  return (
    <img
      alt="Logo"
      src="/static/logo.png"
      {...props}
      style={{ width: 60, height: 60 }}
    />
  );
}

export default Logo;
