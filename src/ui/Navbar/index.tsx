"use client";
import { categories } from "@/lib/categories";
import React, { FC, useContext } from "react";
import styles from "@/ui/Navbar/index.module.scss";
import Link from "next/link";
import { BurgerMenuContext } from "@/lib/context/BurgerMenuContext";

type Props = {};

const Navbar: FC = (props: Props) => {
  const { isOpen } = useContext(BurgerMenuContext)!;

  if (!isOpen) {
    return (
      <></>
    )
  }

  return (
    <nav className={styles.navigation}>
      <h2 className={styles.title}>Categories</h2>
      <ul className={styles.list}>
        {categories.map((category) => (
          <li className={styles.list_item} key={category.id}>
            <Link href={`/${category.link}`}>
              {<category.icon />} <span>{category.category}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
