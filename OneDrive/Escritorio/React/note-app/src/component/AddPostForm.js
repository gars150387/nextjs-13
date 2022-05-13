import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from '../reducers/postsSlice';
import { selectAllUsers } from '../user/usersSlice';

export const AddPostForm = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('')


    const users = useSelector(selectAllUsers)

    const onSavePostClick = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle('');
            setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersPtions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    const onTitleChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }

    const onContentChange = (e) => {
        e.preventDefault()
        setContent(e.target.value)
    }

    const onUserChange = (e) => {
        e.preventDefault()
        setUserId(e.target.value)
    }

    return (
        <section id='addPost' className='m-5'>
            <h2>Add Your Post</h2>

            <form>
                <label htmlFor='postTitle'>
                    Post Title:
                </label>
                <input
                    type='text'
                    id='postTitle'
                    name='postTitle'
                    value={title}
                    onChange={onTitleChange}
                />
                <br />

                <label htmlFor='postAuthor'>
                    Author:
                    <select id='postAuthor' value={userId} onChange={onUserChange}>
                        <option></option>
                        {usersPtions}
                    </select>
                </label>


                <br />
                <label htmlFor='postTitle'>
                    Post content: 
                </label>
                <textarea
                    type='content'
                    id='postContent'
                    name='postContent'
                    value={content}
                    onChange={onContentChange}
                />

                <button
                    disabled={!canSave}
                    type='button'
                    onClick={onSavePostClick}>
                    Save Post
                </button>
            </form>

        </section>
    )
}
