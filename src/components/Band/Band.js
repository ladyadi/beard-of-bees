import React from 'react'
import "./Band.css";
import michael from '../../assets/michael-hardman.png'
import aaron from '../../assets/aaron-hardman.png';
import ryan from '../../assets/ryan-hardman.png';
import shayla from '../../assets/shayla-hardman.png';
import chase from '../../assets/chase-howell.png';
import jesse from '../../assets/jesse-hardman.png';

const Band = () => {

    return (
        <div id="meet-the-band">
            <div className="band-section">
                <h1>Meet the Band</h1>
                <div class="band-intro">
                    Beard of Bees is a rock band based in Utah and Idaho. The band is made up of mostly siblings from
                    the Hardman family. In 2014 they started performing and recording and added drummer Chase Howell to
                    the line up. You can see them perform anywhere from the Salt Lake Valley to Eastern Idaho. Sit back
                    and enjoy a beard of bees on your face.
                </div>

                <div className="band-members">
                    <div>
                        <img src={michael} alt="Michael Hardman" width={200} />
                        <div>Michael Hardman</div>
                        <div>Guitar | Vocals</div>
                    </div>

                    <div>
                        <img src={aaron} alt="Aaron Hardman" width={200} />
                        <div>Aaron Hardman</div>
                        <div>Guitar</div>
                    </div>

                    <div>
                        <img src={ryan} alt="Ryan Hardman" width={200} />
                        <div>Ryan Hardman</div>
                        <div>Bass</div>
                    </div>

                    <div>
                        <img src={chase} alt="Chase Howell" width={200} />
                        <div>Chase Howell</div>
                        <div>Drums</div>
                    </div>

                    <div>
                        <img src={jesse} alt="Jesse Hardman" width={200} />
                        <div>Jesse Hardman</div>
                        <div>Keys | Mandolin | Banjo</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Band;