import React from 'react';
import "./Music.css";

const prenatalBeard = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/50077081&color=%23985846&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true';
const beardOfBees = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/320157869&color=%23484848&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true';

const Music = () => {

    return (
        <div id="music">
            <h1>Music</h1>

            <div className="albums">
                <iframe
                    width="45%"
                    height="450"
                    scrolling="yes"
                    frameborder="no"
                    allow="autoplay"
                    src={prenatalBeard}>
                </iframe>
                <iframe
                    width="45%"
                    height="450"
                    scrolling="yes"
                    frameborder="no"
                    allow="autoplay"
                    src={beardOfBees}>
                </iframe>
            </div>
        </div>
    )
}

export default Music;