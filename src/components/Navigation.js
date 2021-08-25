import React from 'react';

function Navigation(props) {
    return (
        <>
            <nav class='navbar navbar-expand-lg navbar-light bg-light'>
                <div class='collapse navbar-collapse' id='navbarNav'>
                    <ul class='navbar-nav'>
                        <li class='nav-item active'>
                            <a
                                class='nav-link'
                                onClick={() => {
                                    props.setCurrentPage('About');
                                }}
                            >
                                About
                            </a>
                        </li>
                        <li class='nav-item'>
                            <a
                                class='nav-link'
                                onClick={() => {
                                    props.setCurrentPage('LipBalm');
                                }}
                            >
                                Lip Balm Flavors
                            </a>
                        </li>
                        <li class='nav-item'>
                            <a
                                class='nav-link'
                                onClick={() => {
                                    props.setCurrentPage('Contact');
                                }}
                            >
                                Contact
                            </a>
                        </li>
                        <li class='nav-item'>
                            <a
                                class='nav-link'
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
