import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <footer className='fixed-bottom'>
            <p className="foot">Copyright 2020 Zach Greenberg |
          <span className="socials">
                    <a href="https://www.linkedin.com/in/zachary-greenberg-0857551a8/" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </span>
                <a href="https://github.com/Zach-Greenberg" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
            </p>
        </footer>
    )
}
export default Footer;