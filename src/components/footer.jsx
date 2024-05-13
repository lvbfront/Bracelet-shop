import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-turquoise-200 text-white mt-8 py-6">
            <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
                {/* Social Media Links */}
                <div className="mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://facebook.com" className="hover:text-rose-gold-200 transition-colors">Facebook</a>
                        <a href="https://instagram.com" className="hover:text-rose-gold-200 transition-colors">Instagram</a>
                        <a href="https://twitter.com" className="hover:text-rose-gold-200 transition-colors">Twitter</a>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold">Contact Us</h3>
                    <p>Email: info@braceletstore.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>

                {/* Other Important Links */}
                <div className="mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul>
                        <li><Link to="/about" className="hover:text-rose-gold-200 transition-colors">About Us</Link></li>
                        <li><Link to="/privacy" className="hover:text-rose-gold-200 transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-rose-gold-200 transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
