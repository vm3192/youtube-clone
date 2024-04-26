import { FC } from "react";
import styles from "./page.module.scss";
import VideoCard from "@/ui/VideoCard";
import { getByCategory } from "@/lib/data";
import { VideoCardType } from "@/lib/definitions";

const Home: FC = async () => {
  const data = await getByCategory("new");

  return (
    <>
      <h1 className={styles.category_title}>Home</h1>
      <div className={styles.videos_wrapper}>
        {data.map((card: VideoCardType) => (
          <VideoCard key={card.id.videoId} data={card} />
        ))}
      </div>
    </>
  );
};

export default Home;
