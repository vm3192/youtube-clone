import { FC } from "react";
import styles from "./page.module.scss";
import VideoCard from "@/ui/VideoCard";

const data = ['1', '2', '3', '4', '5']

const Home: FC = () => {
  return (
    <div className={styles.videos_wrapper}>
      {data.map(card => (
        <VideoCard key={`1`} />
      ))}
    </div>
  );
}

export default Home;