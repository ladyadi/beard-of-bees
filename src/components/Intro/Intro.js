import React from 'react';
import { Link } from 'react-scroll';
import "./Intro.css";
import { BsChevronCompactDown } from 'react-icons/bs';

const Intro = () => {

    return (
        <div id="home">
            <div className="intro-section">
                <div className="highlight">
                    <div className="beard-o-bees">Beard of Bees</div>
                </div>
            </div>
            <Link
                to="meet-the-band"
                smooth={true}
                duration={500}
            >
                <div className="icon">
                    <BsChevronCompactDown />
                </div>
            </Link>

        </div>
    )
}

export default Intro;