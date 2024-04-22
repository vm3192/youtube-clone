import React, { FC } from "react";
import styles from "@/ui/SuggestedCard/index.module.scss";
import Image from "next/image";

type Props = {};

const SuggestedCard: FC = (props: Props) => {
  return (
    <div className={styles.suggested_wrapper}>
      <div className={styles.preview_wrapper}>
        <Image
          src={`https://placehold.jp/345x195.png`}
          alt="video preview"
          fill
        />
      </div>
      <div className={styles.video_info}>
        <h4 className={styles.video_title}>video title</h4>
        <h5 className={styles.channel_title}>channel title</h5>
        <div className={styles.video_stats}>
          <span>53k views</span>
          <span>•</span>
          <span>1 year ago</span>
        </div>
      </div>
    </div>
  );
};

export default SuggestedCard;
