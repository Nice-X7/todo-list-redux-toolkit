import { configureStore } from '@reduxjs/toolkit';
import PhotoReducer from './Photos/PhotosSlice';
import AlbumReducer from './Albums/AlbumsSlice';

export const store = configureStore({
  reducer: {
    photos: PhotoReducer,
    albums: AlbumReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;