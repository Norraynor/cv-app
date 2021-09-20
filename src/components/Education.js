import React from 'react';
//import './Education.css'; should have its own css

function Education(props){
    const data = props.data;
    return(
        <div id="education">
            <h3 className="school-name">{data.school}</h3>
            <h5 className="study-title">{data['study-title']}</h5>
            <p class="date-from">{data["school-date-from"]} </p>
            <p class="date-to">{data["school-date-to"]} </p>
        </div>
    )

}
export default Education;
