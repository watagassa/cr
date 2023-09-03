import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export const SidebarData = [
  {
    title: "ホーム",
    icon: <HomeIcon />,
    link: "/App",
  },
  {
    title: "投稿",
    icon: <AddPhotoAlternateIcon/>,
    link: "/PostingScreen",
  },
  
];
