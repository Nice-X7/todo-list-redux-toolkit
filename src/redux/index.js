import { configureStore } from '@reduxjs/toolkit'
import PhotoReducer from './Photos/PhotosSlice'
import AlbumReducer from './Albums/AlbumsSlice'

export const store = configureStore({
  reducer: {
    photos: PhotoReducer,
    albums: AlbumReducer
  },
})