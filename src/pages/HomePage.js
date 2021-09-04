import React from 'react';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className='HomePage'>
            <header className='hero'>
                <h1 className='hero-text'>
                    Hi, I am
                    <span> Suu Nguyen</span>
                </h1>
                <p className='h-sub-text'>
                    A last-year student of Information Technology faculty at HCM
                    University of Science.
                    <br />
                    Currently, I am looking for a new job.
                </p>
                <div className='icons'>
                    <Link
                        to={{ pathname: 'https://www.facebook.com/itdev126' }}
                        target='_blank'
                        className='icon-holder'
                    >
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className='icon fb'
                        />
                    </Link>
                    <Link
                        to={{ pathname: 'https://github.com/snguyen126' }}
                        target='_blank'
                        className='icon-holder'
                    >
                        <FontAwesomeIcon icon={faGithub} className='icon gh' />
                    </Link>
                    <Link
                        to={{
                            pathname: 'https://www.linkedin.com/in/itdev126',
                        }}
                        target='_blank'
                        className='icon-holder'
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className='icon yt'
                        />
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default HomePage;
