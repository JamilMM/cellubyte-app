import React from 'react'
import './VideoStyles.css'

import dataVideo from '../assets/newvideo.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={dataVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>CELLUBYTE GROUP</h1>
                <p>Inventing A Better Future With 5G</p>
                
            </div>
        </div>
    )
}

export default Video