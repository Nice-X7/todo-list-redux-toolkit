import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadPhotos } from "../redux/Photos/PhotosSlice";
import { Photo } from "./Photo";

export const Photos = () => {
  const photos = useSelector((state) => state.photos.photos);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (id !== undefined) {
      dispatch(loadPhotos(id));
    }
  }, [id]);

  return (
    <div className="photos">
      <ul>
        {photos.map((photo) => {
          return <Photo key={photo.id} photo={photo} />;
        })}
      </ul>
    </div>
  );
};