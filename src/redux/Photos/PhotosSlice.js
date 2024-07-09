import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    photos: [],
    loading: false
}

export const loadPhotos = createAsyncThunk(
    'load/photos/start',
    async (id) => {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${id}`)

        return responce.json()
    }
)

export const PhotosSlice = createSlice({
  name: 'Photos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(loadPhotos.pending, (state) => {
        state.loading = true
    })
    .addCase(loadPhotos.fulfilled, (state, action) => {
        state.loading = false
        state.photos = action.payload
    })
  }
})

export default PhotosSlice.reducer