import React, { FC } from "react";
import styles from "@/ui/Header/index.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";

type Props = {};

const Header: FC = (props: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.MenuLogo_group}>
        <RxHamburgerMenu size={22} />
        <Link className={styles.logo} href="/">
          <AiFillYoutube />
          YTClone
        </Link>
      </div>
      <form>
        <input className={styles.searchInput} type="search" name="search" placeholder="Search" />
      </form>
      <div className={styles.darkmode}>
        <input type="checkbox" id="darkmode" value="darkmode" />
        <label htmlFor="darkmode">darkmode</label>
      </div>
    </header>
  );
};

export default Header;
