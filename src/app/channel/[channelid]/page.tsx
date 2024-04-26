import React, { FC } from "react";
import styles from "@/app/channel/[channelId]/page.module.scss";
import VideoCard from "@/ui/VideoCard";
import Image from "next/image";
import { getChannelDetails, getVideosByChannel } from "@/lib/data";
import { VideoCardType } from "@/lib/definitions";
import { formatCount, formatCountWithComma } from "@/lib/utils";

type Props = {
  params: {
    channelId: string;
  }
};

const ChannelPage: FC<Props> = async ({ params }) => {
  const channelDetails = await getChannelDetails(params.channelId);
  const { title, customUrl, description, thumbnails } = channelDetails.snippet;
  const { subscriberCount, videoCount } = channelDetails.statistics
  const videos = await getVideosByChannel(params.channelId);

  return (
    <>
      <div className={styles.about_channel}>
        <div className={styles.banner}>
          <Image
            src={channelDetails.brandingSettings.image.bannerExternalUrl}
            alt="channel banner"
            fill
          />
        </div>
        <div className={styles.channel_box}>
          <div className={styles.channel_avatar}>
            <Image
              src={thumbnails.high.url}
              alt="channel avatar"
              fill
            />
          </div>
          <div className={styles.channel_info}>
            <h2 className={styles.channel_title}>{title}</h2>
            <div className={styles.channel_stats}>
              <span className={styles.custom_url}>{customUrl}</span>
              <span>‧</span>
              <span className={styles.subscribers_count}>{formatCount(subscriberCount)} subscribers</span>
              <span>‧</span>
              <span className={styles.videos_count}>{formatCountWithComma(videoCount)} videos</span>
            </div>
            <div className={styles.channel_description}>
              {description}
            </div>
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
