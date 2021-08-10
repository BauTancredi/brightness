import React from "react";
import IcoMoon from "react-icomoon";

import "./index.css";

const iconSet = require("./selection.json");

const Icon = ({ ...props }) => {
  return <IcoMoon iconSet={iconSet} {...props} className="icon" />;
};

export default Icon;
