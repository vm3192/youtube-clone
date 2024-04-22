import React, { FC } from "react";
import styles from "@/ui/Comment/index.module.scss";
import Image from "next/image";
import { BiLike } from "react-icons/bi";

type Props = {};

const Comment: FC = (props: Props) => {
  return (
    <div className={styles.comment_wrapper}>
      <div className={styles.comment_avatar}>
        <Image
          src={"https://placehold.jp/345x195.png"}
          alt="commentator avatar"
          fill
        />
      </div>
      <div className={styles.comment_box}>
        <div className={styles.comment_head}>
          <h6 className={styles.comment_name}>@commentator</h6>
          <span className={styles.comment_date}>1 year ago</span>
        </div>
        <p className={styles.comment_text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
          laudantium deleniti eligendi sit culpa veniam maxime, ut non magnam
          sapiente? Pariatur porro sequi magnam deserunt temporibus est eum
          ipsum minima! Possimus aperiam impedit iure voluptatem quas officiis
          esse recusandae, ex error sint aliquam consequatur, facere
          perspiciatis unde est soluta pariatur sed ipsam id omnis nostrum. Amet
          beatae reiciendis sequi eligendi.
        </p>
        <div className={styles.comment_likes}>
          <BiLike />
          <span>113</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
