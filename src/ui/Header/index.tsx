"use client";

import React, {
  ChangeEvent,
  FC,
  FormEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  useContext,
  useRef,
  useState,
} from "react";
import styles from "@/ui/Header/index.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillYoutube } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BurgerMenuContext } from "@/lib/context/BurgerMenuContext";
import { DarkmodeContext } from "@/lib/context/DarkmodeContext";

type Props = {};

const Header: FC<Props> = () => {
  const [searchValue, setSearchValue] = useState("");
  const params = new URLSearchParams();
  const { replace } = useRouter();
  const { isOpen, setIsOpen } = useContext(BurgerMenuContext)!;
  const { darkmode, setDarkmode } = useContext(DarkmodeContext)!;
  const darkmodeRef = useRef<HTMLInputElement>(null)

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
  };

  const handleKeyPress: KeyboardEventHandler = (event) => {
    if (event.key === "Enter" && searchValue.length > 1) {
      params.set("q", searchValue);
      replace(`/search/?${params}`);
      setSearchValue("");
    }
  };

  const handleSearchClick: MouseEventHandler = (event) => {
    if (searchValue.length > 1) {
      params.set("q", searchValue);
      replace(`/search/?${params}`);
      setSearchValue("");
    }
  };

  const handleClickBurger = () => {
    setIsOpen(!isOpen);
  };

  const darkmodeHandler = () => {
    setDarkmode(!darkmode);
  };

  const darkmodeClickHandle = () => {
    darkmodeRef.current?.click()
  }

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
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          type="search"
          name="search"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchInput}
          onKeyDown={handleKeyPress}
        />
        <CiSearch className={styles.searchIcon} style={{color: "#ccc"}} onClick={handleSearchClick} />
      </form>
      <div className={`${styles.darkmodeButton} ${darkmode ? styles.active : ""}`} onClick={darkmodeClickHandle}>
        <input
          type="checkbox"
          id="darkmode"
          value="darkmode"
          onClick={darkmodeHandler}
          ref={darkmodeRef}
        />
        <label htmlFor="darkmode"></label>
      </div>
    </header>
  );
};

export default Header;
