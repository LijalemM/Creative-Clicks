import React, {useState} from 'react';
import './App.css';
import {Login} from "./component/Login";
import {Sign_in} from "./component/signin";


function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Sign_in onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
