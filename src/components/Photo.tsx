import React from "react";

interface PhotoProps {
  photo: {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  };
}

export const Photo: React.FC<PhotoProps> = ({ photo }) => {
  return <li>{photo.title}</li>;
};