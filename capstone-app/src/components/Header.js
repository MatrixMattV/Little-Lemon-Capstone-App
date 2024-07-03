import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restrauntfood.jpg';

const Header = () => {
    return (
        <header className='header'>
            <section>
                {/* banner text */}
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restraunt, focused on traditional recipes served with a modern twist.</p>
                    <link to="/booking"><button arial-label='On Click'>Reserve Table</button></link>
                </div>

                {/*banner image */}
                <div className='banner-img'>
                    <img src={bannerImg} alt=''/>
                </div>
            </section>
        </header>
    );
};

export default Header;