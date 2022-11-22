import React from 'react';
import './ContactInformation.css'
const ContactInformation = (props) => {
    return (
        <div className='details-text'>
                    <div className='info-one'>
                        {props.info}
                    </div>
                    <div className='info-two'>
                        :
                    </div>
                    <div className='info-three'>
                       {props.infoDetails}
                    </div>
        </div>
    );
}

export default ContactInformation;
