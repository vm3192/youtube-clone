import React, { FC } from "react";
import styles from "@/ui/SearchCard/index.module.scss";
import { VideoCardType } from "@/lib/definitions";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

type Props = {
  data: VideoCardType;
};

const SearchCard: FC<Props> = ({ data }) => {
  const {
    id: { videoId },
    snippet: {
      publishedAt,
      channelId,
      title,
      description,
      thumbnails,
      channelTitle,
    },
  } = data;

  return (
    <div className={styles.card_wrapper}>
      <Link className={styles.preview_wrapper} href={`/video/${videoId}`}>
        <img src={thumbnails.high.url} alt="video preview" />
      </Link>
      <div className={styles.video_info}>
        <Link className={styles.video_title} href={`/video/${videoId}`}>
          {title}
        </Link>
        <div className={styles.video_stats}>
          <span>{formatDate(publishedAt)}</span>
        </div>
        <div className={styles.channel_info}>
          <Link className={styles.channel_title} href={`/channel/${channelId}`}>
            {channelTitle}
          </Link>
        </div>
        <div className={styles.video_description}>{description}</div>
      </div>
    </div>
  );
};

export default SearchCard;
