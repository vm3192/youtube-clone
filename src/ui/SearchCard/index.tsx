import React, { FC } from "react";
import styles from "@/ui/SearchCard/index.module.scss";
import Image from "next/image";

type Props = {
  key: string;
};

const SearchCard: FC<Props> = (props: Props) => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.preview_wrapper}>
        <Image
          src={"https://placehold.jp/345x195.png"}
          alt="video preview"
          fill
        />
      </div>
      <div className={styles.video_info}>
        <h2 className={styles.video_title}>Video title</h2>
        <div className={styles.video_stats}>
          <span>123k views</span>
          <span>•</span>
          <span>1 day ago</span>
        </div>
        <div className={styles.channel_info}>
          <div className={styles.channel_avatar}>
            <Image
              src={"https://placehold.jp/345x195.png"}
              alt="channel avatar"
              fill
            />
          </div>
          <h3 className={styles.channel_title}>Channel title</h3>
        </div>
        <div className={styles.video_description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta perspiciatis amet, enim repellat quasi accusantium cupiditate quae ad vero, laborum rerum eaque aspernatur mollitia necessitatibus explicabo facilis iusto quisquam reiciendis asperiores rem. Quia quasi excepturi rerum!</div>
      </div>
    </div>
  );
};

export default SearchCard;
