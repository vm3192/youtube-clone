"use client";

import React, { FC } from 'react'
import ReactPlayer from 'react-player';
import styles from "@/ui/Player/index.module.scss";

type Props = {
  id: string
}

const Player: FC<Props> = ({ id }) => {
  return (
    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className={styles.react_player} controls />
  )
}

export default Player;