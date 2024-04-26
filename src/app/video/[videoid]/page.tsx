import React, { FC } from "react";
import styles from "@/app/video/[videoid]/page.module.scss";
import Image from "next/image";
import Comment from "@/ui/Comment";
import { BiSolidLike } from "react-icons/bi";
import SuggestedCard from "@/ui/SuggestedCard";
import {
  getChannelDetails,
  getComments,
  getSuggestedVideos,
  getVideoDetails,
} from "@/lib/data";
import Link from "next/link";
import { formatCountWithComma, formatCount, formatDate } from "@/lib/utils";
import { CommentType, VideoCardType } from "@/lib/definitions";
import Player from "@/ui/Player";

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
  const comments = await getComments(params.videoId);
  const suggestedVideos = await getSuggestedVideos(params.videoId);
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
      </div>
      <div className={styles.suggested_box}>
        <h3 className={styles.suggested_title}>Suggested videos</h3>
        <div className={styles.suggested_container}>
          {suggestedVideos ? (
            suggestedVideos.map((video: VideoCardType) => (
              <SuggestedCard key={video.id.videoId} data={video} />
            ))
          ) : (
            <p>Nothing...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
