import React from "react";
import { NavLink } from "react-router-dom";

export const Album = ({ album }) => {
  return (
    <li>
      <NavLink to={`/${album.id}`}>{album.title}</NavLink>
    </li>
  );
};
