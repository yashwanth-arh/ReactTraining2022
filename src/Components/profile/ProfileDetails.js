import React , {useState} from 'react';
import  './ProfileDetails.css';
import ProfileImage from './ProfileImage';
import profilePic from '../../Assets/Images/man.png';
import qouteImg from '../../Assets/Images/enjoy.png'
import switchImg from '../../Assets/Images/hacker.png'
import ContactInformation from './Contact-Info/ContactInformation';

const ProfileDetails = () =>{
    const [switchimg, setState] = useState(profilePic);
    const [isActive, setIsActive] = useState(false);
   const clickHandler = () =>{
    setIsActive(!isActive);
    setState(qouteImg);
   };
       return (
        <div className="profile-main">
            
                <ProfileImage profilePic = {(isActive?switchimg:profilePic)} />
            
            <div className="profile-card">
                <div className='name-text'>
                    Yashwanth Kumar
                </div>
                <div className='role-text'>
                    Frontend Developer
                </div>
                <ContactInformation info='Emp. Code' infoDetails='E00231'/>
                <ContactInformation info='Email' infoDetails='yashwanth.kumar@xyramsoft.com'/>
                <ContactInformation info='Mobile' infoDetails='6360694946'/>

                <div className='switchImg' onClick={clickHandler}>
                    Click <img src={switchImg} width='50'/> Here <input type='checkbox' checked={isActive}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails;