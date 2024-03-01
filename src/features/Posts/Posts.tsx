import React, {useEffect} from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    fetchPostsAsync, selectPosts
} from "./PostsSlice";
import styles from './Posts.module.scss';

export function Posts() {
    const posts = useAppSelector(selectPosts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPostsAsync())
    })

    return (
        <div className={styles.Posts} data-testid="Posts">
            <ul>
                {
                    posts.map((post, index) => {
                        return <li key={index}>{'post'}</li>
                    })
                }
            </ul>
        </div>
    )
}
