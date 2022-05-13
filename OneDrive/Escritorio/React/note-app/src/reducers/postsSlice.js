import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: 'I-ve heard good thing....',
        date: sub(new Date(),{ minutes: 10}).toISOString(),

    },{
        id: '2',
        title: 'Slices...',
        content: 'more content to learn',
        date: sub(new Date(),{ minutes: 5}).toISOString(),

    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postAdded: {
            reducer(state, action){
            state.push(action.payload)
        },
        prepare(title, content, userId){
            return {
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    userId,
                    date: new Date().toISOString(),
                }
            }
        }
    },
    reactionAdd( state, action){
        const {postId, reaction} = action.payload
        const existingPost = state.find(post => post.id === postId)

        if (existingPost){
            existingPost.reactions[reaction]++
        }
    }
    }
})

export const selectAllPost = (state) => state.posts

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer