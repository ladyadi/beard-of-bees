import React, { useState } from 'react';
import FeaturedVideos from './Featured-Video';
import "./Videos.css";
import guitars from '../../assets//guitars.jpg';
import runFromMyHeart from '../../assets/run_from_my_heart.png';
import theGrey from '../../assets/the_grey.png';
import goldenSpike from '../../assets/golden_spike.png';
import wayHome from '../../assets/way_home.png';

const Videos = () => {
    const [activeUrl, setActiveUrl] = useState('https://www.youtube-nocookie.com/embed/x9CrBKUKh_g');


    const vids = [
        { id: '1', url: 'https://www.youtube-nocookie.com/embed/x9CrBKUKh_g?autoplay=1', title: 'Run From My Heart', image: runFromMyHeart },
        { id: '2', url: 'https://www.youtube-nocookie.com/embed/ITPBvisRRF0?autoplay=1', title: 'The Grey', image: theGrey },
        { id: '3', url: 'https://www.youtube-nocookie.com/embed/qrCvXj-w3GI?autoplay=1', title: 'Golden Spike', image: goldenSpike },
        { id: '4', url: 'https://www.youtube-nocookie.com/embed/cK6ngQ6CDnI?autoplay=1', title: 'Way Home', image: wayHome }
    ]

    return (
        <div id="videos">
            {/* <img src={guitars} className="video-background" /> */}
            <h1>Videos</h1>
            <FeaturedVideos url={activeUrl} />
            <div class="video-options">
                {vids.map((vid) => (
                    <div class="vid-card" onClick={() => setActiveUrl(vid.url)}>
                        <img class="vid-image" src={vid.image} alt={vid.title} />
                        <div class="vid-title">{vid.title}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Videos;