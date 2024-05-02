import { Dispatch, FC, SetStateAction } from "react";

export type Category = {
  id: number;
  category: string;
  icon: FC;
  link: string;
}

export type VideoCardType = {
  kind: string;
  id: { kind: string; videoId: string };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
};

export type CommentType = {
  id: string;
  snippet: {
    topLevelComment: {
      snippet: {
        channelId: string;
        videoId: string;
        textDisplay: string;
        authorDisplayName: string;
        authorProfileImageUrl: string;
        likeCount: number;
        publishedAt: string;
      }
    };
  }
}

export type BurgerMenuContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}