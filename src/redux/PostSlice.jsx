import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getPosts = createAsyncThunk('post/getPosts', async () => {
    const res = await axios.get('https://dummyjson.com/posts')
    return res.data
})

export const PostSlice = createSlice({
    name: "user",
    initialState: {
        data: [],
        error: null,
        loading: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'loading'
            }
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.data = action.payload
            }
        })
        builder.addCase(getPosts.rejected, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.error = "Error"
            }
        })
    }
})

export default PostSlice.reducer;