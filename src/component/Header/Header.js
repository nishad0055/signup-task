import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/ultimate hrm logo-05-02 2.png'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                  <Link to= '/' > <img src={logo} alt="" /></Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0 font-inter text-base font-semibold">
                        <li><Link to ='/login' >Login</Link></li>
                        <li><Link to ='/signup' >Sign Up</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;