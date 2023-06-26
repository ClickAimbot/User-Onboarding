import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Form from './Components/Form'

const intialFormValues = {
  username: "",
  email: "",
  password: "",
  checked: false
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleSubmit = () => {
    //WIP
  }

  const handleChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }
  return (
    <div className="App">
      <Form values={formValues} />
    </div>
  );
}

export default App;
