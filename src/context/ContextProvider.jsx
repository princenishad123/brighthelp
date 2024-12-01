import React, { useState } from "react";
import MyContext from "./contextConfig";

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) ?? true
  );
  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
