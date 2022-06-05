import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/Beard_of_Bees_Logo.jpg'
import { HiMenu } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import "./Header.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const activeStyle = { fontWeight: 'bold', textDecoration: 'underline' };

    return (
        <div className="header" style={{ position: 'sticky', top: '0' }}>
            <Link
                to="home"
                smooth={true}
                duration={500}
            >
                <img src={logo} alt="Beard of Bees Logo" height="50" style={{ cursor: 'pointer' }} />
            </Link>

            <div className="navigation">
                <Link to="shows" className="link" activeStyle={activeStyle}>Shows</Link>
                <Link
                    to="meet-the-band"
                    className="link"
                    activeStyle={activeStyle}
                    smooth={true}
                    duration={500}>
                    Meet the Band</Link>
                <Link
                    to="music"
                    className="link"
                    activeStyle={activeStyle}
                    smooth={true}
                    duration={500}>
                    Music
                </Link>
                <Link
                    to="videos"
                    className="link"
                    activeStyle={activeStyle}
                    smooth={true}
                    duration={500}>
                    Videos
                </Link>
                <Link
                    to="contact"
                    className="link"
                    activeStyle={activeStyle}
                    smooth={true}
                    duration={500}>
                    Contact
                </Link>
            </div>

            {
                !isOpen
                    ?
                    <div className='mobile-container'>
                        <div className="mobile-menu">
                            <HiMenu onClick={() => setIsOpen(true)} />
                        </div>
                    </div>
                    :
                    <div className='mobile-container'>
                        <div className='mobile-menu-close'>
                            <CgClose onClick={() => setIsOpen(false)} />
                        </div>
                        <div class="mobile-menu-items">
                            <div className="link-item">
                                <Link to="shows" className="link" activeStyle={activeStyle}>Shows</Link>
                            </div>
                            <div className="link-item">
                                <Link
                                    to="meet-the-band"
                                    className="link"
                                    activeStyle={activeStyle}
                                    smooth={true}
                                    duration={500}>
                                    Meet the Band
                                </Link>
                            </div>
                            <div className="link-item">
                                <Link
                                    to="music"
                                    className="link"
                                    activeStyle={activeStyle}
                                    smooth={true}
                                    duration={500}>
                                    Music
                                </Link>
                            </div>
                            <div className="link-item">
                                <Link
                                    to="videos"
                                    className="link"
                                    activeStyle={activeStyle}
                                    smooth={true}
                                    duration={500}>
                                    Videos
                                </Link>
                            </div>
                            <div className="link-item">
                                <Link
                                    to="contact"
                                    className="link"
                                    activeStyle={activeStyle}
                                    smooth={true}
                                    duration={500}>
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Header;