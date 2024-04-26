import React, { FC } from "react";
import SearchCard from "@/ui/SearchCard";
import styles from "@/app/search/page.module.scss";
import { getByCategory } from "@/lib/data";
import { VideoCardType } from "@/lib/definitions";

type Props = {
  searchParams: string;
};

const SearchPage: FC<Props> = async ({ searchParams }) => {
  const videos = await getByCategory(searchParams);

  return (
    <div className={styles.search_wrapper}>
      {videos.map((video: VideoCardType) => (
        <SearchCard key={video.id.videoId} data={video} />
      ))}
    </div>
  );
};

export default SearchPage;
