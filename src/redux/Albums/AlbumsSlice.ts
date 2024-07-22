import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AlbumType {
    userId: number
    id: number
    title: string
}

interface AlbumsState {
    albums: AlbumType[]
    loading: boolean
}

const initialState: AlbumsState = {
    albums: [],
    loading: false
}

export const loadAlbums = createAsyncThunk(
    'load/albums/start',
    async () => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/albums')
        return responce.json()
    }
)

export const AlbumsSlice = createSlice({
    name: 'Album',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadAlbums.pending, (state) => {
                state.loading = true
            })
            .addCase(loadAlbums.fulfilled, (state, action: PayloadAction<AlbumType[]>) => {
                state.loading = false
                state.albums = action.payload
            })
    }
})

export default AlbumsSlice.reducer