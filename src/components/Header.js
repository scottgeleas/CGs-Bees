import React from 'react';
import Navigation from '../components/Navigation';

function Header(props) {
    return (
        <>
            <div className='hero'>
                {/* <img
                    src='https://via.placeholder.com/468x60
                    C/O https://placeholder.com/'
                    alt='placeholder'
                /> */}
                <h1>THIS IS HEADER</h1>
            </div>
            <Navigation setCurrentPage={props.setCurrentPage} />
        </>
    );
}

export default Header;
