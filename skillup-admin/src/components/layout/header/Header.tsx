import React, { Component } from 'react';
import HeaderTab from './HeaderTab';
import { FaHome, FaBook, FaChargingStation } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default class Header extends Component {

    render() {
        return (
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                        <span className="ml-3 text-xl skillup-primary-color-text">SkillUp-Admin</span>
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <HeaderTab title="Home" Icon={FaHome} isActive={true} />
                        <HeaderTab title="Books" Icon={FaBook} />
                        <HeaderTab title="Changes" Icon={FaChargingStation} />
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 skillup-text-color-primaryrounded text-base mt-4 md:mt-0 transition-colors focus:outline-none hover:skillup-background-color-primary hover:text-white">
                        Log in
                    </button>
                </div>
            </header>
            // <nav className="header p">
            //     
            // </nav>
        );
    }
}
