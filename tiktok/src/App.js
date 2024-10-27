import {useEffect, useRef} from 'react';
import Videos from "./Videos";
import './App.css';

function App() {
    const videoRef = useRef(null);

    useEffect(() => {
        console.log(videoRef.current);
    }, []);

    const handlePlay = () => {
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
    };

    return (
        <div>
            <Videos ref={videoRef}/>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}

export default App;