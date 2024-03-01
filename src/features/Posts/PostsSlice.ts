import {createSlice, PayloadAction, createAsyncThunk, ActionReducerMapBuilder} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {fetchPosts, IPost} from './postsAPI';
import {incrementAsync} from "../counter/counterSlice";


export interface IPostsState {
    posts: IPost[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: IPostsState = {
    posts: [],
    status: 'idle',
};

export const fetchPostsAsync = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const response = await fetchPosts();
        return response.data;
    }
);

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<IPost>) => {
            state.posts = [...state.posts, action.payload];
        },
        removePost: (state, action: PayloadAction<number>) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload);
        },
        editPost: (state, action: PayloadAction<IPost>) => {
            const foundPostIndex: number = state.posts.findIndex((post) => post.id === action.payload.id);
            if (-1 < foundPostIndex) {
                state.posts = state.posts.splice(foundPostIndex, 1, action.payload);
            }
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<IPostsState>) => {
        builder
            .addCase(fetchPostsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPostsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.posts = action.payload;
            })
            .addCase(incrementAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { addPost, removePost, editPost } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;