import React from "react";
import AppBar from "material-ui/AppBar";

const NavBar = () => {
  return (
    <div>
      <AppBar
        title="React & Material-UI Sample Application"
        position="static"
        showMenuIconButton={true}
        zDepth={4}
      />
    </div>
  );
};

export default NavBar;
