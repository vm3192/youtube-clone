import React, { FC } from "react";
import styles from "@/app/[category]/page.module.scss";
import { VideoCardType } from "@/lib/definitions";
import VideoCard from "@/ui/VideoCard";
import { getByCategory } from "@/lib/data";

type Props = {
  params: { category: string };
};

const CategoryPage: FC<Props> = async ({ params }) => {
  const { category } = params;
  const data = await getByCategory(category);

  return (
    <>
      <h1 className={styles.category_title}>{category}</h1>
      <div className={styles.videos_wrapper}>
        {data.map((card: VideoCardType) => (
          <VideoCard key={card.id.videoId} data={card} />
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
