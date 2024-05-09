"use client";

import React, { FC, useEffect, useState } from "react";
import styles from "@/app/[category]/page.module.scss";
import { VideoCardType } from "@/lib/definitions";
import VideoCard from "@/ui/VideoCard";
import { getByCategory } from "@/lib/data";

type Props = {
  params: { category: string };
};

const CategoryPage: FC<Props> = ({ params }) => {
  const { category } = params;
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const  fetchedData = await getByCategory(category);
      setData(fetchedData);
    }
    fetchData();
  }, [category])

  return (
    <>
      <h1 className={styles.category_title}>{category}</h1>
      <div className={styles.videos_wrapper}>
        {data?.map((card: VideoCardType) => (
          card.id.videoId && <VideoCard key={card.id.videoId} data={card} />
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
