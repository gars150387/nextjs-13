import React from 'react'
import { Player, ControlBar } from 'video-react';

import '../styles/video.scss'

export const Video3 = () => {
    return (
        <div>
            <div className='video3'>
                <Player
                    autoPlay
                    muted
                    poster="/assets/poster.png"
                    src={require('../video/video3.mp4')}
                >
                    <ControlBar autoHide={true} className="" />
                </Player>
            </div>

        </div>
    )
}
