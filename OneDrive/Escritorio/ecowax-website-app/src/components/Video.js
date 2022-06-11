import React from 'react'

import { Video1 } from './Video1';
import { Video2 } from './Video2';
import { Video3 } from './Video3';
import { Video4 } from './Video4';

import '../styles/video.scss'

export const Video = () => {
  return (
    <div className='video-container'>
      <Video1 />
      <Video2 />
      <Video3 />
      <Video4 />      
    </div>
  )
}
