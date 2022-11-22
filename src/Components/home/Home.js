import React from 'react';
import './Home.css';
import devPic from '../../Assets/Images/pngwing.com.png'
const Home = () => {
    return (
        <div  className='home-main'>
               <div className='home-left'>
                    <h2>Hey, I'm <span style={{color:'red'}}>Y</span>ashwanth <span style={{color:'orange'}}>Web</span> Developer</h2>
                    <p>Front End Developer</p>
               </div>
                <div className='home-right'>
                    <img src={devPic} width="900" alt='developer'/>
                </div>
        </div>
    );
}

export default Home;