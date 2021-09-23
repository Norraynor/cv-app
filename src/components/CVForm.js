import React, { useState, useEffect} from 'react';
import '../styles/CVForm.css';

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
    useEffect(()=>{
        if(props.cvData && !Object.keys(props.cvData)<1){
            setData(props.cvData);
            console.log(props.cvData);
        }
    },[props.cvData])

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
                <h4>General</h4>
                <div id="general">
                    <label htmlFor="name">Full Name</label>
                    <input
                        onChange={handleChange}
                        defaultValue={props.cvData?props.cvData.name:""}
                        type="text"
                        id="name"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={handleChange}
                        defaultValue={props.cvData?props.cvData.email:""}
                        placeholder="example@example.com"
                        type="email"
                        id="email"
                    />
                    <label htmlFor="phone">Phone</label>
                    <input
                        onChange={handleChange}
                        defaultValue={props.cvData?props.cvData.phone:""}
                        placeholder="123 456 789"
                        type="tel"
                        id="phone"
                        pattern = "[0-9]{9}"
                    />
                </div>
                <h4>Education</h4>
                <div id="education">
                    <label htmlFor="school">School Name</label>
                    <input
                        onChange={handleChange}
                        defaultValue={props.cvData?props.cvData.school:""}
                        type="text"
                        id="school"
                    />
                    <label htmlFor="study-title">Title of study</label>
                    <input
                        onChange={handleChange}
                        defaultValue={props.cvData?props.cvData["study-title"]:""}
                        type="text"
                        id="study-title"
                    />
                    <p>Date of study</p>
                    <div className="dates-input">
                        <div>
                            <label htmlFor="school-date-from">from</label>
                            <input
                                onChange={handleChange}
                                defaultValue={props.cvData?props.cvData["school-date-from"]:""}
                                type="date"
                                id="school-date-from"
                            />
                        </div>
                        <div>
                            <label htmlFor="school-date-to">to</label>
                            <input
                                onChange={handleChange}
                                defaultValue={props.cvData?props.cvData["school-date-to"]:""}
                                type="date"
                                id="school-date-to"
                            />
                        </div>                        
                    </div>
                    
                </div>
                <h4>Experience</h4>
                <div id="experience">
                    <label htmlFor="company-name">Company Name</label>
                    <input
                        onChange={handleChange}
                        defaultValue={props.cvData?props.cvData["company-name"]:""}
                        type="text"
                        id="company-name"
                    />
                    <label htmlFor="position-name">Position Name</label>
                    <input
                        onChange={handleChange}
                        defaultValue={props.cvData?props.cvData["position-name"]:""}
                        type="text"
                        id="position-name"
                    />
                    <div>
                        <p>Date of employment</p>
                        <div className="dates-input">
                            <div>
                                <label htmlFor="company-date-from">from</label>
                                <input
                                    onChange={handleChange}
                                    defaultValue={props.cvData?props.cvData["company-date-from"]:""}
                                    type="date"
                                    id="company-date-from"
                                />
                            </div>
                            <div>
                                <label htmlFor="company-date-to">to</label>
                                <input
                                    onChange={handleChange}
                                    defaultValue={props.cvData?props.cvData["company-date-to"]:""}
                                    type="date"
                                    id="company-date-to"
                                />
                            </div>                            
                        </div>
                    </div>
                    
                </div>
                <div className="buttons">
                    <button id="submit" type="submit">Add CV</button>
                    <button id="cancel" onClick={handleCancel}>Cancel</button>
                </div>
                

            </form>
        </div>
    )    
}
export default CVForm;