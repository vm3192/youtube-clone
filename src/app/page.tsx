"use client";

import { FC, useEffect, useState } from "react";
import styles from "./page.module.scss";
import VideoCard from "@/ui/VideoCard";
import { getByCategory } from "@/lib/data";
import { VideoCardType } from "@/lib/definitions";

const Home: FC = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getByCategory("new")
      setData(fetchedData)
    };

    fetchData();
  }, [])

  return (
    <>
      <h1 className={styles.category_title}>Home</h1>
      <div className={styles.videos_wrapper}>
        {data?.map((card: VideoCardType) => (
          card.id.videoId && <VideoCard key={card.id.videoId} data={card} />
        ))}
      </div>
    </>
  );
};

export default Home;
