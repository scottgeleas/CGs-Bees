import React from 'react';

function Navigation(props) {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav me-auto'>
                        <li className='nav-item'>
                            <a
                                className='nav-link'
                                onClick={() => {
                                    props.setCurrentPage('About');
                                }}
                            >
                                About
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                className='nav-link'
                                onClick={() => {
                                    props.setCurrentPage('LipBalm');
                                }}
                            >
                                Lip Balm Flavors
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                className='nav-link'
                                onClick={() => {
                                    props.setCurrentPage('Contact');
                                }}
                            >
                                Contact
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                className='nav-link'
                                onClick={() => {
                                    props.setCurrentPage('Gallery');
                                }}
                            >
                                Gallery
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navigation;
