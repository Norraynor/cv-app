import React from 'react';
import "../styles/Introduction.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

function Introduction(props){
    const data = props.data;
    return(
        <div id="introduction">
            <div className="name-div">
                <h3 className="name">{data.name}</h3>
            </div>
            <div className="email-div">
                <FontAwesomeIcon className="intro-icon" icon={faEnvelope}/>
                <h5 className="email">{data.email}</h5>
            </div>
            <div className="phone-div">
                <FontAwesomeIcon className="intro-icon" icon={faPhoneAlt}/>
                <h5 className="phone">{data.phone} </h5>
            </div>
        </div>
    )

}
export default Introduction;
