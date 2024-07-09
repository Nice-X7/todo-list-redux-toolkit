import React from "react";
import { useSelector } from "react-redux";
import { Album } from "./Album";

export const Albums = () => {
  const albums = useSelector((state) => state.albums.albums);

  return (
    <div className="albums">
      <ul>
        {albums.map((item) => {
          return <Album key={item.id} album={item} />;
        })}
      </ul>
    </div>
  );
};
