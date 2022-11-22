import { Outlet, Link } from 'react-router-dom';
import './Nav.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import logo from '../../Assets/Images/icons8-life-cycle.gif';
import profilePic from '../../Assets/Images/man.png';
const Nav = () => {
    return (
        <>
            <div className='navbar'>
                <div className='nav-left'>
                    {/* <Link to="/" >
                    <img src={logo} className="logo" width="75" />
                    </Link> */}
                     <nav className='nav-list'>
                     <Link to="/" style={{ padding: 5 }}>
                     <i class="fa fa-home" style={{ marginRight: 5 }}></i> Home
                        </Link>
                        <Link to="/profile" style={{ padding: 5 }}>
                        <i class="fa fa-user-circle-o" style={{ marginRight: 5 }}></i> Profile
                        </Link>
                        <Link to="/about" style={{ padding: 5 }}>
                        <i class="fa fa-user" style={{ marginRight: 5 }}></i>About
                        </Link>
                    </nav>

                </div>


                <div className='profileName' title='Profile'>
                   
                    Yashwanth <Link to='/profile'><img src={profilePic} width="43" /></Link> 
                </div>

            </div>
            <Outlet />
        </>
    );
}

export default Nav;
