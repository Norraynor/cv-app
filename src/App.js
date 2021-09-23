import React, { useState } from 'react';
import './App.css';
import CVForm from './components/CVForm';
import Education from './components/Education';
import Introduction from './components/Introduction';
import Experience from './components/Experience';


function App() {
  //data to display in form of cv
  const [data,setData] = useState({
        name:"John Doe",
        email:"example@example.com",
        phone: "123456789",
        school:"examplary school",
        "study-title":"exampling",
        "school-date-from":0,
        "school-date-to":0,
        "company-name":"examplers",
        "position-name":"examplist",
        "company-date-from":0,
        "company-date-to":0
  });
  //display either form or cv display:false-> show form || display:true->show cv --- if no data then always false
  const [page,setPage] = useState(false);
  function handleClick(event){
    setPage(true);
  }
  return (
    <div className="App">
      {
        page
        ?<CVForm cvData={data} sendData={setData} changePage={setPage}/>
        :Object.keys(data)<1
        ?<div>
          <p>no elements - create new cv</p>
          <button className="main-button" id="create-new-cv" onClick={(handleClick)}>create new CV</button>
        </div>
        :<div>
          <button className="main-button" id="edit-button" onClick={handleClick}>Edit CV</button>          
          <Introduction data={data}/>          
          <Education data={data}/>          
          <Experience data={data}/>
        </div>  
      }
    </div>
  );
}

export default App;
