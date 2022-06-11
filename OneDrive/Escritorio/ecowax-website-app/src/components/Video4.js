import React from 'react'
import { Player, ControlBar } from 'video-react';

import '../styles/video.scss'

export const Video4 = () => {
    return (
        <div>
            <div className='video4'>
                <Player
                    autoPlay
                    muted
                    poster="/assets/poster.png"
                    src={require('../video/video4.mp4')}
                >
                    <ControlBar autoHide={true} className="" />
                </Player>
            </div>

        </div>
    )
}
