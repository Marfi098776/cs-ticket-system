import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 w-11/12 px-8 mx-auto">

            {/* Left side */}
            <div className="flex-1">
                <a className="text-xl font-bold">
                    CS — Ticket System
                </a>
            </div>

            {/* Right side */}
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 items-center gap-2">
                    <li><a>Home</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Changelog</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>

                    <li>
                        <button className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] ml-3 text-white font-semibold">
                            + New Ticket
                        </button>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;