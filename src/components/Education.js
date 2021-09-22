import React from 'react';
import "../styles/Education.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

function Education(props){
    const data = props.data;
    return(
        <div id="education">
            <div id="title">
                <FontAwesomeIcon icon={faGraduationCap} size="2x" className="margin-change"/>   
                <h1>Education</h1>
                <FontAwesomeIcon icon={faGraduationCap} size="2x" className="margin-change"/>                
            </div>
            <div className="school">
                <h3 className="school-name">{data.school}</h3>
                <h5 className="study-title">{data['study-title']}</h5>
                <div className="dates">
                    <p className="date-from">
                        from: 
                        <FontAwesomeIcon icon={faCalendarAlt} className="dates-icon"/> 
                        {data["school-date-from"]} 
                    </p>
                    <p className="date-to">
                        to: 
                        <FontAwesomeIcon icon={faCalendarAlt} className="dates-icon"/> 
                        {data["school-date-to"]} 
                    </p>
                </div>
            </div>
        </div>
    )

}
export default Education;
