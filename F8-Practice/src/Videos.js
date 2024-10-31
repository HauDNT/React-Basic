import Video1 from './videos/Video1.mp4';
import {forwardRef, useImperativeHandle, useRef} from "react";

function Video(props, ref) {
    const videoRef = useRef(null);

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
    }));

    return (
        <video
            ref={videoRef}
            src={Video1}
            width={280}
        />
    )
}

export default forwardRef(Video);