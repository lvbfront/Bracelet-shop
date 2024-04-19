import React from 'react';

function Footer() {



    return (
        <footer className="bg-slate-800 text-white p-4 mt-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-2 md:mb-0">
                    <p className="text-center md:text-left font-semibold">Company Name</p>
                </div>
                <div className="flex justify-center space-x-4">
                    <a href="/about" className="hover:text-gray-300">About Us</a>
                    <a href="/services" className="hover:text-gray-300">Services</a>
                    <a href="/contact" className="hover:text-gray-300">Contact</a>
                </div>
                <div className="flex justify-center space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="path_to_facebook_icon" alt="Facebook" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="path_to_twitter_icon" alt="Twitter" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="path_to_instagram_icon" alt="Instagram" />
                    </a>
                </div>
                <div className="mt-2 md:mt-0">
                    <p className="text-center md:text-right text-xs">
                        © {new Date().getFullYear()} Company Name. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
