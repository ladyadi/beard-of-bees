import React from 'react';
import "./Featured-Video.css";

const FeaturedVideos = ({ url }) => {

    return (
        <div>
            <iframe
                style={{ margin: '0 auto', display: 'block' }}
                width="560"
                height="315"
                src={url}
                // title='YouTube video player'
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
    )
}

export default FeaturedVideos;