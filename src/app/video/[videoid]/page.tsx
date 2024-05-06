import React, { FC } from "react";
import styles from "@/app/video/[videoid]/page.module.scss";
import Image from "next/image";
import { BiSolidLike } from "react-icons/bi";
import { getChannelDetails, getVideoDetails } from "@/lib/data";
import Link from "next/link";
import { formatCount, formatDate } from "@/lib/utils";
import Player from "@/ui/Player";
import SuggestedVideos from "@/ui/SuggestedVideos";
import VideoComments from "@/ui/VideoComments";

type Props = {
  params: {
    videoId: string;
  };
};

const VideoPage: FC<Props> = async ({ params }) => {
  const {
    snippet: { publishedAt, channelId, title, description, channelTitle },
    statistics: { viewCount, likeCount, commentCount },
  } = await getVideoDetails(params.videoId);
  const channelDetails = await getChannelDetails(channelId);
  const formattedDate = formatDate(publishedAt);

  return (
    <div className={styles.wrapper}>
      <div className={styles.video_box}>
        <div className={styles.video_area}>
          <Player id={params.videoId} />
        </div>
        <h2 className={styles.video_title}>{title}</h2>
        <div className={styles.video_bio}>
          <div className={styles.video_channel}>
            <div className={styles.channel_avatar}>
              <Image
                src={channelDetails.snippet.thumbnails.high.url}
                alt="channel avatar"
                fill
              />
            </div>
            <div className={styles.channel_stats}>
              <Link
                className={styles.channel_title}
                href={`/channel/${channelId}`}>
                {channelTitle}
              </Link>
              <p className={styles.channel_subscribers}>
                {formatCount(channelDetails.statistics.subscriberCount)}{" "}
                subscribers
              </p>
            </div>
          </div>
          <div className={styles.video_likes}>
            <BiSolidLike />
            <span>{formatCount(likeCount)}</span>
          </div>
        </div>
        <div className={styles.video_info}>
          <div className={styles.video_data}>
            <span>{formatCount(viewCount)} views</span>
            <span>{formattedDate}</span>
          </div>
          <div className={styles.video_description}>{description}</div>
        </div>
        <VideoComments params={params} commentCount={commentCount} />
      </div>
      <SuggestedVideos params={params} />
    </div>
  );
};

export default VideoPage;
