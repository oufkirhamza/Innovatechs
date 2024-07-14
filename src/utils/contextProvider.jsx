import React, { createContext, useState } from "react";
export const MyContext = createContext();
export const MyProvider = ({ children }) => {
  return (
    <>
      <MyContext.Provider value={{  }}>
        {children}
      </MyContext.Provider>
    </>
  );
};
