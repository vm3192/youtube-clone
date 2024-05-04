"use client";

import { ReactNode, createContext, useState } from "react";
import { DarkmodeContextType } from "@/lib/definitions";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

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
