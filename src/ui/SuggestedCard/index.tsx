import React, { FC } from "react";
import styles from "@/ui/SuggestedCard/index.module.scss";
import { VideoCardType } from "@/lib/definitions";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

type Props = {
  data: VideoCardType;
};

const SuggestedCard: FC<Props> = ({ data }) => {
  const {
    id: { videoId },
    snippet: { thumbnails, title, channelTitle, publishedAt, channelId },
  } = data;

  return (
    <div className={styles.suggested_wrapper}>
      <Link className={styles.preview_wrapper} href={`/video/${videoId}`}>
        <img
          src={thumbnails.default?.url || "https://placehold.jp/345x195.png"}
          alt="video preview"
        />
      </Link>
      <div className={styles.video_info}>
        <Link className={styles.video_title} href={`/video/${videoId}`}>
          {title}
        </Link>
        <Link className={styles.channel_title} href={`/channel/${channelId}`}>
          {channelTitle}
        </Link>
        <div className={styles.video_stats}>
          <span>{publishedAt && formatDate(publishedAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default SuggestedCard;
