import React, { FC } from "react";
import styles from "@/app/video/[videoid]/page.module.scss";
import Image from "next/image";
import Comment from "@/ui/Comment";
import { BiSolidLike } from "react-icons/bi";
import SuggestedCard from "@/ui/SuggestedCard";

const comments = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
const suggestedVideos = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];

type Props = {};

const VideoPage: FC = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.video_box}>
        <div className={styles.video_area}>
          <Image src={'https://placehold.jp/345x195.png'} alt='video' fill />
        </div>
        <h2 className={styles.video_title}>video title</h2>
        <div className={styles.video_bio}>
          <div className={styles.video_channel}>
            <div className={styles.channel_avatar}>
              <Image
                src={"https://placehold.jp/345x195.png"}
                alt="channel avatar"
                fill
              />
            </div>
            <div className={styles.channel_stats}>
              <h3 className={styles.channel_title}>channel title</h3>
              <p className={styles.channel_subscribers}>2.92M subscribers</p>
            </div>
          </div>
          <div className={styles.video_likes}>
            <BiSolidLike />
            <span>30k</span>
          </div>
        </div>
        <div className={styles.video_info}>
          <div className={styles.video_data}>
            <span>331,676 views</span>
            <span>Apr 17, 2024</span>
          </div>
          <div className={styles.video_description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            quo harum a, laboriosam voluptates blanditiis delectus laudantium
            vel, qui maiores mollitia incidunt quia doloribus aliquam nam
            nostrum, iusto sit quod dicta esse nobis ad? Quasi a hic dicta
            repellendus eum eveniet culpa minima et non nostrum voluptate
            necessitatibus expedita suscipit aut, atque possimus laudantium odio
            veritatis. Quam consequatur harum assumenda mollitia rem sed
            voluptates laudantium numquam voluptatibus alias perferendis,
            praesentium atque officiis blanditiis reiciendis eveniet repellendus
            vel quo, quod voluptatum nesciunt? Quaerat fugiat laboriosam
            corrupti labore quidem libero iste quae odit provident nostrum velit
            eum nesciunt recusandae, ad dolorem perspiciatis! Aut explicabo
            deserunt, sunt, eaque doloremque cum voluptatem delectus cupiditate
            asperiores qui rem quam praesentium enim reiciendis sint. Quibusdam,
            quod facilis ea ducimus beatae ut adipisci, autem totam
            reprehenderit mollitia rem fugit magnam sequi sed id laborum
            corrupti maiores in magni. Facilis consectetur dignissimos, in
            similique et ut id numquam doloremque inventore amet sequi dolore,
            doloribus sapiente dolores. Quae, sunt.
          </div>
        </div>
        <h6 className={styles.comments_title}>443 Comments</h6>
        <div className={styles.comments_container}>
          {comments.map((comment) => (
            <Comment key={comment} />
          ))}
        </div>
      </div>
      <div className={styles.suggested_box}>
        <h3 className={styles.suggested_title}>Suggested videos</h3>
        <div className={styles.suggested_container}>
          {suggestedVideos.map(video => (
            <SuggestedCard key={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
