import React, { FC } from "react";
import Image from "next/image";
import styles from "@/ui/VideoCard/index.module.scss";

type Props = {};

const VideoCard: FC = (props: Props) => {
  return (
    <div className={styles.video_wrapper}>
      <div className={styles.video_banner}>
        <Image src={`https://placehold.jp/345x195.png`} alt="video" fill />
      </div>
      <h2 className={styles.video_title}>video title</h2>
      <h3 className={styles.channel_title}>channel title</h3>
      <p className={styles.date}>13/04/24</p>
    </div>
  );
};

export default VideoCard;
