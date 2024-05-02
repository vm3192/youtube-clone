"use client";

import { ReactNode, createContext, useState } from "react";
import { BurgerMenuContextType } from "@/lib/definitions";

const BurgerMenuContext = createContext<BurgerMenuContextType | undefined>(undefined);

const BurgerMenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <BurgerMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </BurgerMenuContext.Provider>
  );
};

export { BurgerMenuContext, BurgerMenuContextProvider };
