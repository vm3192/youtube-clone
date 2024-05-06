import React, { FC } from "react";
import styles from "@/ui/SuggestedVideos/index.module.scss";
import SuggestedCard from "@/ui/SuggestedCard";
import { getSuggestedVideos } from "@/lib/data";
import { VideoCardType } from "@/lib/definitions";

type Props = {
  params: {
    videoId: string;
  };
};

const SuggestedVideos: FC<Props> = async ({ params }) => {
  const suggestedVideos = await getSuggestedVideos(params.videoId);

  return (
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
  );
};

export default SuggestedVideos;
