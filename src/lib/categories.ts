import { FC } from 'react';
import { IoMdHome } from 'react-icons/io';
import { MdOutlineLiveTv } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { CgGames } from "react-icons/cg";
import { MdOutlineCardTravel } from "react-icons/md";
import { MdOutlineQueueMusic } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { MdSportsFootball } from "react-icons/md";

type Category = {
  id: number;
  category: string;
  icon: FC;
  link: string;
}

export const categories: Category[] = [
  {
    id: 1,
    category: "Home",
    icon: IoMdHome,
    link: "",
  },
  {
    id: 2,
    category: "Live",
    icon: MdOutlineLiveTv,
    link: "live",
  },
  {
    id: 3,
    category: "Coding", 
    icon: FaLaptopCode,
    link: "coding",
  },
  {
    id: 4,
    category: "Education",
    icon: GiTeacher,
    link: "education",
  },
  {
    id: 5,
    category: "Games",
    icon: CgGames,
    link: "games",
  },
  {
    id: 6,
    category: "Travel",
    icon: MdOutlineCardTravel,
    link: "travel",
  },
  {
    id: 7,
    category: "Music",
    icon: MdOutlineQueueMusic,
    link: "music",
  },
  {
    id: 8,
    category: "Movies",
    icon: BiMoviePlay,
    link: "movies",
  },
  {
    id: 9,
    category: "Sport",
    icon: MdSportsFootball,
    link: "sport",
  },
];
