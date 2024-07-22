import React from "react";
import { NavLink } from "react-router-dom";

interface AlbumProps {
  album: {
    userId: number
    id: number
    title: string
  }
}

export const Album: React.FC<AlbumProps> = ({ album }) => {
  return (
    <li>
      <NavLink to={`/${album.id}`}>{album.title}</NavLink>
    </li>
  );
};
