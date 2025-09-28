import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='bg-slate-200 border-t'>
     
      <div className="container mx-auto p-4 text-center flex flex-col lg:flex-row lg:justify-between gap-2">
        <p className="text-center font-bold text-sm " title='www.codemarketi.com'>
          &copy; {new Date().getFullYear()} Shop Master. All rights reserved.
        </p>

        <div className='flex items-center gap-4 justify-center text-2xl'>
                <a href='' className='hover:text-subMain'>
                    <FaFacebook/>
                </a>
                <a href='' className='hover:text-subMain'>
                    <FaInstagram/>
                </a>
                <a href='' className='hover:text-subMain'>
                    <FaLinkedin/>
                </a>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
