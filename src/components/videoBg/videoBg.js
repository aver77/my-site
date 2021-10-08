import React, { useState } from "react";
import Spinner from "../spinner/spinner";
import video from './video/videoBg.mp4';

const VideoBg = () => {
    const [isVideo,isVideoCheck] = useState(null);

    if (video) {
        isVideoCheck(true);
    }

    if (isVideo) {
        return (
            <video className='videoTag' autoPlay loop muted>
                <source src={video} type='video/mp4' />
            </video>
        )
    }
    return <Spinner/>

}
export default VideoBg;