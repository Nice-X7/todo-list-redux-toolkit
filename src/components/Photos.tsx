import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadPhotos } from "../redux/Photos/PhotosSlice";
import { Photo } from "./Photo";
import { AppDispatch, RootState } from "../redux";
import styles from '../styles/photo.module.scss'

export const Photos: React.FC = () => {
  const photos = useSelector((state: RootState) => state.photos.photos);
  const { id } = useParams<{id: string}>();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (id !== undefined) {
      dispatch(loadPhotos(id));
    }
  }, [id, dispatch]);

  return (
    <div className={styles.photos}>
      <ul>
        {photos.map((photo) => {
          return <Photo key={photo.id} photo={photo} />;
        })}
      </ul>
    </div>
  );
};