import React from "react";
import { useSelector } from "react-redux";
import { Album } from "./Album";
import { RootState } from "../redux";
import styles from '../styles/album.module.scss'

export const Albums = () => {
  const albums = useSelector((state: RootState) => state.albums.albums);

  return (
    <div className={styles.albums}>
      <ul>
        {albums.map((item) => {
          return <Album key={item.id} album={item} />;
        })}
      </ul>
    </div>
  );
};
