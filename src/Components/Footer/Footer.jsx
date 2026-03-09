import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 px-10 py-12">

            {/* Top Footer */}
            <div className="grid md:grid-cols-5 gap-10 border-b border-gray-700 pb-10">

                {/* Brand */}
                <div>
                    <h2 className="text-white text-xl font-bold mb-4">
                        CS — Ticket System
                    </h2>
                    <p className="text-sm leading-relaxed">
                        CS — Ticket System is a modern platform for booking cricket match tickets.
                        Fans can browse upcoming games, reserve seats, and receive instant
                        confirmation to enjoy the thrill of live cricket at the stadium.
                    </p>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a className="hover:text-white">About Us</a></li>
                        <li><a className="hover:text-white">Our Mission</a></li>
                        <li><a className="hover:text-white">Contact Sales</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a className="hover:text-white">Products & Services</a></li>
                        <li><a className="hover:text-white">Customer Stories</a></li>
                        <li><a className="hover:text-white">Download Apps</a></li>
                    </ul>
                </div>

                {/* Information */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Information</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a className="hover:text-white">Privacy Policy</a></li>
                        <li><a className="hover:text-white">Terms & Conditions</a></li>
                        <li><a className="hover:text-white">Join Us</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Social Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li>𝕏 @CS — Ticket System</li>
                        <li>LinkedIn @CS — Ticket System</li>
                        <li>Facebook @CS — Ticket System</li>
                        <li>Email support@cst.com</li>
                    </ul>
                </div>

            </div>

            {/* Bottom Footer */}
            <div className="text-center text-sm pt-6 text-gray-400">
                © 2025 CS — Ticket System. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;