"use client";

import React, { FC, useContext } from "react";
import styles from "@/ui/Header/index.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";
import { BurgerMenuContext } from "@/lib/context/BurgerMenuContext";
import { DarkmodeContext } from "@/lib/context/DarkmodeContext";
import DarkmodeButton from "@/ui/DarkmodeButton";
import SearchField from "@/ui/SearchField";

type Props = {};

const Header: FC<Props> = () => {
  const { isOpen, setIsOpen } = useContext(BurgerMenuContext)!;
  const { darkmode } = useContext(DarkmodeContext)!;

  const handleClickBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${styles.header} ${darkmode ? styles.darkmode : ""}`}>
      <div className={styles.MenuLogo_group}>
        <RxHamburgerMenu
          size={22}
          onClick={handleClickBurger}
          className={styles.burger}
        />
        <Link className={styles.logo} href="/">
          <AiFillYoutube />
          YTClone
        </Link>
      </div>
      <SearchField />
      <DarkmodeButton />
    </header>
  );
};

export default Header;
