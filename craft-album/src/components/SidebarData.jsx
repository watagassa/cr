import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LogoutIcon from '@mui/icons-material/Logout';
export const SidebarData = [
  {
    title: "ホーム",
    icon: <HomeIcon />,
    link: "/HomeScreen",
  },
  {
    title: "投稿",
    icon: <AddPhotoAlternateIcon/>,
    link: "/PostingScreen",
  },
  {
    title: "ログアウト",
    icon: <LogoutIcon />,
    link: "/",
  },
];