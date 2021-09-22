import React from 'react';
import "../styles/Experience.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons'

function Experience(props){
    const data = props.data;
    return(
        <div id="experience">
            <div id="title">
                <FontAwesomeIcon icon={faBriefcase} size="2x" className="margin-change"/>   
                <h1>Experience</h1>
                <FontAwesomeIcon icon={faBriefcase} size="2x" className="margin-change"/>                
            </div>
            <div className="employer">
                <h3 className="position-name">{data["position-name"]}</h3>
                <h5 className="company-name">{data["company-name"]}</h5>
                <div className="dates">
                    <p className="company-date-from"> 
                        from: 
                        <FontAwesomeIcon icon={faCalendarAlt} className="dates-icon"/> 
                        {data["company-date-from"]} 
                    </p>
                    <p className="company-date-to">
                        to: 
                        <FontAwesomeIcon icon={faCalendarAlt} className="dates-icon"/> 
                        {data["company-date-to"]} 
                    </p>
                </div>

            </div>
        </div>
    )

}
export default Experience;
