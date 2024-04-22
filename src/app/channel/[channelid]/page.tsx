import React, { FC } from "react";
import styles from "@/app/channel/[channelId]/page.module.scss";
import VideoCard from "@/ui/VideoCard";
import Image from "next/image";

const data = ["1", "2", "3", "4", "5"];

type Props = {};

const ChannelPage: FC = (props: Props) => {
  return (
    <>
      <div className={styles.about_channel}>
        <div className={styles.banner}>
          <Image
            src={`https://placehold.jp/345x195.png`}
            alt="channel banner"
            fill
          />
        </div>
        <div className={styles.channel_box}>
          <div className={styles.channel_avatar}>
            <Image
              src={`https://placehold.jp/345x195.png`}
              alt="channel avatar"
              fill
            />
          </div>
          <div className={styles.channel_info}>
            <h2 className={styles.channel_title}>Channel title</h2>
            <div className={styles.channel_stats}>
              <span className={styles.custom_url}>@customURL</span>
              <span>‧</span>
              <span className={styles.subscribers_count}>132 subscribers</span>
              <span>‧</span>
              <span className={styles.videos_count}>124 videos</span>
            </div>
            <div className={styles.channel_description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              eum, deleniti quibusdam ipsum nostrum deserunt veritatis quia,
              maiores eaque quam praesentium sapiente voluptatem tempore,
              adipisci quasi sed voluptate voluptates dolore? Illum voluptatum
              recusandae facere praesentium dolores fugiat tempora voluptas
              magnam, deleniti similique iusto necessitatibus alias minima sequi
              in esse quas cum modi accusantium quia error voluptatibus?
              Dolorem, consequatur?
            </div>
          </div>
        </div>
      </div>
      <h3 className={styles.tape_title}>Videos</h3>
      <div className={styles.videos_wrapper}>
        {data.map((card) => (
          <VideoCard key={`1`} />
        ))}
      </div>
    </>
  );
};

export default ChannelPage;
