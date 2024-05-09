"use client";

import React, { FC, useEffect, useState } from "react";
import SearchCard from "@/ui/SearchCard";
import styles from "@/app/search/page.module.scss";
import { getByCategory } from "@/lib/data";
import { VideoCardType } from "@/lib/definitions";

type Props = {
  searchParams: {
    q: string;
  };
};

const SearchPage: FC<Props> = ({ searchParams }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getByCategory(searchParams.q);
      setVideos(data);
    };

    fetchData();
  }, [searchParams.q]);

  return (
    <div className={styles.search_wrapper}>
      {videos.map((video: VideoCardType) => (
        video.id.videoId && <SearchCard key={video.id.videoId} data={video} />
      ))}
    </div>
  );
};

export default SearchPage;
