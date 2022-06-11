import React from 'react'
import { Player, ControlBar } from 'video-react';

import '../styles/video.scss'


export const Video2 = () => {
    return (
        <div>
            <div className='video2'>
                <Player
                    autoPlay
                    muted
                    poster="/assets/poster.png"
                    src={require('../video/video2.mp4')}
                >
                    <ControlBar autoHide={true} className="" />
                </Player>
            </div>
        </div>
    )
}
