import React from 'react';
import Navigation from '../components/Navigation';
// import banner from '../images/banner.jpg';

function Header(props) {
    return (
        <>
            <div className='hero'>
                {/* <img
                    src={banner}
                    alt='placeholder'
                /> */}
            </div>
            <Navigation setCurrentPage={props.setCurrentPage} />
        </>
    );
}

export default Header;
