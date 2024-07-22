import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

interface PhotosState {
    photos: Photo[];
    loading: boolean;
}

const initialState: PhotosState = {
    photos: [],
    loading: false
};

export const loadPhotos = createAsyncThunk<Photo[], string>(
    'load/photos/start',
    async (id: string) => {
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
            .addCase(loadPhotos.fulfilled, (state, action: PayloadAction<Photo[]>) => {
                state.loading = false
                state.photos = action.payload
            })
    }
})

export default PhotosSlice.reducer