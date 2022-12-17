import React from 'react';
import logo from '../../assets/logo/1.png'
import linkedin from '../../assets/social/linkedin (2).png'
import facebook from '../../assets/social/facebook (1).png'
import google from '../../assets/social/google.png'
import twitter from '../../assets/social/twitter.png'
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-white text-gray-700">
            <div>
            <img src={logo} alt="logo" className='lg:w-28 w-16 h-12 lg:h-20' />
                <p className="font-bold">
                    Triedge Lab. <br />Providing reliable tech since 1992
                </p>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                   <img src={twitter} alt="social" className='lg:w-8 w-5 lg:h-8 h-5 rounded-lg' />
                   <img src={linkedin} alt="social" className='lg:w-8 w-5 lg:h-8 h-5 rounded-lg' />
                   <img src={facebook} alt="social" className='lg:w-8 w-5 lg:h-8 h-5 rounded-lg' />
                   <img src={google} alt="social" className='lg:w-8 w-5 lg:h-8 h-5 rounded-lg' />
                </div>
            </div>
        </footer>
    );
};

export default Footer;