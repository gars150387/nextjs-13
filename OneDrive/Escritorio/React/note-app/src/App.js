import React from 'react'
import { AddPostForm } from './component/AddPostForm'
import PostsList from './component/postsList'



export const App = () => {
  return (
    <div>
      <AddPostForm />
      <PostsList />
    </div>
  )
}
