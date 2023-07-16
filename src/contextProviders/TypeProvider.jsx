import React, { createContext, memo, useEffect, useState } from "react";

export const TypeContext = createContext();
const TypeProvider = memo(function TypeProvider({ children }) {
  const [type, setType] = useState("movie");
  return (
    <TypeContext.Provider value={[type, setType]}>
      {children}
    </TypeContext.Provider>
  );
});

export default TypeProvider;
