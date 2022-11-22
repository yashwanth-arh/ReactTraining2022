import React from 'react';
import './ProfileImage.css'
const ProfileImage = (props) => {
    return (
        <div className='profile-pic'>
           <img src={props.profilePic} alt='profile logo' width='200'/> 
        </div>
    );
}

export default ProfileImage;
