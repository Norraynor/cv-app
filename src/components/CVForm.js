import React, { useState } from 'react';
//import './CVForm.css'; should have its own css

function CVForm(props){
    const [data,setData] = useState({
        name:"",
        email:"",
        phone:0,
        school:"",
        "study-title":"",
        "school-date-from":0,
        "school-date-to":0,
        "company-name":"",
        "position-name":"",
        "company-date-from":0,
        "company-date-to":0
    });
    if(props.cvData && !Object.keys(props.cvData)<1){
        setData(props.cvData);
    }

    function handleSubmit(event){
        props.sendData(data);
        props.changePage(false);
        event.preventDefault();
        //add all data to its corresponding components
    }
    function handleCancel(event){
        props.changePage(false);        
    }
    function handleChange(event){
        const newData = {...data,[event.target.id]:event.target.value}
        setData(newData)
        //log every change to object property
    }

    return(
        <div id="cv-form">
            <form onSubmit={handleSubmit}>
                <div id="general">
                    <p>general info</p>
                    <label htmlFor="name">Enter name</label>
                    <input
                        onChange={handleChange}
                        defaultValue={"add defaultValue"}
                        type="text"
                        id="name"
                    />
                    <label htmlFor="email">Enter email</label>
                    <input
                        onChange={handleChange}
                        defaultValue={"add defaultValue"}
                        type="email"
                        id="email"
                    />
                    <label htmlFor="phone">Enter phone(9 numbers)</label>
                    <input
                        onChange={handleChange}
                        defaultValue={"add defaultValue"}
                        type="tel"
                        id="phone"
                        pattern = "[0-9]{9}"
                    />
                </div>
                <div id="education">
                    <p>education info</p>
                    <label htmlFor="school">Enter school name</label>
                    <input
                        onChange={handleChange}
                        defaultValue={"add defaultValue"}
                        type="text"
                        id="school"
                    />
                    <label htmlFor="study-title">Enter title of study</label>
                    <input
                        onChange={handleChange}
                        defaultValue={"add defaultValue"}
                        type="text"
                        id="study-title"
                    />
                    <div>
                        <p>Enter date of study</p>
                        <label htmlFor="school-date-from">from</label>
                        <input
                            onChange={handleChange}
                            defaultValue={"add defaultValue"}
                            type="date"
                            id="school-date-from"
                        />
                        <label htmlFor="school-date-to">to</label>
                        <input
                            onChange={handleChange}
                            defaultValue={"add defaultValue"}
                            type="date"
                            id="school-date-to"
                        />
                    </div>
                    
                </div>
                <div id="experience">
                    <p>experience info</p>
                    <label htmlFor="company-name">Enter company name</label>
                    <input
                        onChange={handleChange}
                        defaultValue={"add defaultValue"}
                        type="text"
                        id="company-name"
                    />
                    <label htmlFor="position-name">Enter position name</label>
                    <input
                        onChange={handleChange}
                        defaultValue={"add defaultValue"}
                        type="text"
                        id="position-name"
                    />
                    <div>
                        <p>Enter date employment</p>
                        <label htmlFor="company-date-from">from</label>
                        <input
                            onChange={handleChange}
                            defaultValue={"add defaultValue"}
                            type="date"
                            id="company-date-from"
                        />
                        <label htmlFor="company-date-to">to</label>
                        <input
                            onChange={handleChange}
                            defaultValue={"add defaultValue"}
                            type="date"
                            id="company-date-to"
                        />
                    </div>
                    
                </div>
                
                <button type="submit">Add CV</button>
                <button onClick={handleCancel}>Cancel</button>

            </form>
        </div>
    )    
}
export default CVForm;