import React, { FC } from "react";
import styles from "@/ui/VideoCard/index.module.scss";
import { VideoCardType } from "@/lib/definitions";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

type Props = {
  data: VideoCardType;
};

const VideoCard: FC<Props> = ({ data }) => {
  const {
    id: { videoId },
    snippet: {
      publishedAt,
      channelId,
      thumbnails: {
        high: { url },
      },
      title,
      channelTitle,
    },
  } = data;

  const formattedDate = formatDate(publishedAt);

  return (
    <div className={styles.video_wrapper}>
      <Link href={`/video/${videoId}`}>
        <div className={styles.video_banner}>
          <img
            src={url ? `${url}` : "https://placehold.jp/345x195.png"}
            alt="video"
          />
        </div>
      </Link>
      <Link className={styles.video_title} href={`/video/${videoId}`}>
        {title}
      </Link>
      <Link href={`/channel/${channelId}`}>
        <h3 className={styles.channel_title}>{channelTitle}</h3>
      </Link>
      <p className={styles.date}>{formattedDate}</p>
    </div>
  );
};

export default VideoCard;
