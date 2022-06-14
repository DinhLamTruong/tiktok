
import { forwardRef, useImperativeHandle, useRef } from 'react';


import video from './videos/video1.mp4';


function Video(props, ref) {
    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }


    }))
    return (
        <video
            ref={videoRef}
            src={video}
            width={280}
            height={250}
        />
    )
}
export default forwardRef(Video)    