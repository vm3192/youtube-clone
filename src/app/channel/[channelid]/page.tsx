import React, { FC } from "react";
import styles from "@/app/channel/[channelid]/page.module.scss";
import VideoCard from "@/ui/VideoCard";
import { getChannelDetails, getVideosByChannel } from "@/lib/data";
import { VideoCardType } from "@/lib/definitions";
import { formatCount, formatCountWithComma } from "@/lib/utils";

type Props = {
  params: {
    channelid: string;
  };
};

const ChannelPage: FC<Props> = async ({ params }) => {
  const channelDetails = await getChannelDetails(params.channelid);
  const { title, customUrl, description, thumbnails } = channelDetails.snippet;
  const { subscriberCount, videoCount } = channelDetails.statistics;
  const videos = await getVideosByChannel(params.channelid);

  return (
    <>
      <div className={styles.about_channel}>
        <div className={styles.banner}>
          <img
            src={channelDetails.brandingSettings.image.bannerExternalUrl}
            alt="channel banner"
          />
        </div>
        <div className={styles.channel_box}>
          <div className={styles.channel_avatar}>
            <img src={thumbnails.high.url} alt="channel avatar" />
          </div>
          <div className={styles.channel_info}>
            <h2 className={styles.channel_title}>{title}</h2>
            <div className={styles.channel_stats}>
              <span className={styles.custom_url}>{customUrl}</span>
              <span>‧</span>
              <span className={styles.subscribers_count}>
                {formatCount(subscriberCount)} subscribers
              </span>
              <span>‧</span>
              <span className={styles.videos_count}>
                {formatCountWithComma(videoCount)} videos
              </span>
            </div>
            <div className={styles.channel_description}>{description}</div>
          </div>
        </div>
      </div>
      <h3 className={styles.tape_title}>Videos</h3>
      <div className={styles.videos_wrapper}>
        {videos.map((video: VideoCardType) => (
          <VideoCard key={video.id.videoId} data={video} />
        ))}
      </div>
    </>
  );
};

export default ChannelPage;
