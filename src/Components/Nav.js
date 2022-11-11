import './Nav.css';
import React from 'react';
import logo from '../Assets/Images/icons8-life-cycle.gif';
import profilePic from '../Assets/Images/man.png';
const Nav = () => {
    return (
        <div className='navbar'>
            <div>
                <img src={logo} className="logo" width="75"/>
            </div>
            <div className='profileName'>
                Yashwanth <img src={profilePic} width="50" />
            </div>
        </div>
    );
}

export default Nav;
