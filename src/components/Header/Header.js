import React from 'react';
import { Link } from 'react-scroll';
import "./Header.css";
import logo from '../../assets/Beard_of_Bees_Logo.jpg'

const Header = () => {
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
        </div>
    )
}

export default Header;