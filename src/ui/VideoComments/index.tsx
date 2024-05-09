import React, { FC } from "react";
import styles from "@/ui/VideoComments/index.module.scss";
import { getComments } from "@/lib/data";
import { formatCountWithComma } from "@/lib/utils";
import { CommentType } from "@/lib/definitions";
import Comment from "@/ui/Comment";

type Props = {
  params: {
    videoid: string;
  };
  commentCount: string;
};

const VideoComments: FC<Props> = async ({ params, commentCount }) => {
  const comments = await getComments(params.videoid);
  return (
    <>
      {comments?.length > 0 && (
        <>
          <h6 className={styles.comments_title}>
            {formatCountWithComma(commentCount)} Comments
          </h6>
          <div className={styles.comments_container}>
            {comments.map((comment: CommentType) => (
              <Comment key={comment.id} data={comment} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default VideoComments;
