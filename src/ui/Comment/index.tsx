import React, { FC } from "react";
import styles from "@/ui/Comment/index.module.scss";
import Image from "next/image";
import { BiLike } from "react-icons/bi";
import { CommentType } from "@/lib/definitions";
import { formatCount, formatDate } from "@/lib/utils";

type Props = {
  data: CommentType;
};

const Comment: FC<Props> = ({ data: { snippet: { topLevelComment } } }) => {
  const { authorProfileImageUrl, authorDisplayName, publishedAt, textDisplay, likeCount } = topLevelComment.snippet

  return (
    <div className={styles.comment_wrapper}>
      <div className={styles.comment_avatar}>
        <Image
          src={authorProfileImageUrl}
          alt="commentator avatar"
          fill
        />
      </div>
      <div className={styles.comment_box}>
        <div className={styles.comment_head}>
          <h6 className={styles.comment_name}>{authorDisplayName}</h6>
          <span className={styles.comment_date}>{formatDate(publishedAt)}</span>
        </div>
        <p className={styles.comment_text}>
          {textDisplay}
        </p>
        <div className={styles.comment_likes}>
          <BiLike />
          <span>{formatCount(likeCount)}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
