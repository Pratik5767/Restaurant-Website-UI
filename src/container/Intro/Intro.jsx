import React from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'
import { useState } from 'react'
import './Intro.css'

const Intro = () => {

    const [playVideo, setPlayVideo] = useState(false)

    const handleVideo = () => {
        setPlayVideo((prev) => !prev);

        if (playVideo) {
            vidref.current.pause();
        }
        else {
            vidref.current.play();
        }
    }

    const vidref = React.useRef();
    return (
        <div className='app__video'>
            <video
                src={meal}
                type="video/mp4"
                loop
                controls={false}
                muted
                ref={vidref}
            />

            <div className='app__video-overlay flex__center'>
                <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>

                    {
                        playVideo ? (<BsPauseFill color='#fff' fontSize={30} />) : (<BsFillPlayFill color='#fff' fontSize={30} />)
                    }

                </div>
            </div>
        </div>
    )
}

export default Intro