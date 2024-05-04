"use client";

import React, { FC, useContext, useRef } from 'react'
import styles from "@/ui/DarkmodeButton/index.module.scss";
import { DarkmodeContext } from '@/lib/context/DarkmodeContext';

type Props = {}

const DarkmodeButton: FC<Props> = () => {
  const { darkmode, setDarkmode } = useContext(DarkmodeContext)!;
  const darkmodeRef = useRef<HTMLInputElement>(null)

  const darkmodeHandler = () => {
    setDarkmode(!darkmode);
  };

  const darkmodeClickHandle = () => {
    darkmodeRef.current?.click()
  }

  return (
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
  )
}

export default DarkmodeButton;