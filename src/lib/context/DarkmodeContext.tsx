"use client";

import { ReactNode, createContext, useState } from "react";
import { DarkmodeContextType } from "../definitions";
import { roboto } from "@/app/layout";

const DarkmodeContext = createContext<DarkmodeContextType | undefined>(
  undefined,
);

const DarkmodeContextProvider = ({ children }: { children: ReactNode }) => {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <DarkmodeContext.Provider value={{ darkmode, setDarkmode }}>
      <body
        className={`${roboto.className}`}
        style={
          darkmode ? { color: "white", backgroundColor: "black" } : undefined
        }>
        {children}
      </body>
    </DarkmodeContext.Provider>
  );
};

export { DarkmodeContext, DarkmodeContextProvider };
