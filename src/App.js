import React, { useState } from 'react';
import './App.css';
import CVForm from './components/CVForm';

function App() {
  console.log("kappi");
  //data to display in form of cv
  const [data,setData] = useState({});
  //display either form or cv display:false-> show form || display:true->show cv --- if no data then always false
  const [page,setPage] = useState(false);
  function handleClick(event){
    setPage(true);
    console.log(data);
  }
  return (
    <div className="App">
      {
        page
        ?<CVForm cvData={data} sendData={setData} changePage={setPage}/>
        :Object.keys(data)<1
        ?<div>
          <p>no elements - create new cv</p>
          <button id="create-new-cv" onClick={handleClick}>create new CV</button>
        </div>
        :<div>
          <p>yes elements xd - display cv and buttons</p>
          <button id="edit-button" onClick={handleClick}>edit</button>
          <h1>intro</h1>
          <h1>edu</h1>
          <h1>exp</h1>
        </div>  
      }

      <p>start</p>
      
      

    </div>
  );
}

export default App;
