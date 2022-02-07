import React, { useState } from 'react'
import firebase from './firebase'
import '../App.css';
import { useNavigate } from 'react-router-dom'
function AddTuto() {
let navigate=useNavigate();
    const [title,setTitle] =useState('');
    const handleOnChange = (e) =>{
        setTitle(e.target.value);
    }
    const [explain,setExplain] =useState('');
    const whandleOnChange = (e) =>{
        setExplain(e.target.value);
    }
    const createTuto = () =>{
        if(title ===""){
            alert("Enter valid details")
        }
        else{
        const todoRef = firebase.database().ref('HTML');
        const todo ={
            title,
            explain,
        };
        todoRef.push(todo);
        setTitle('');
        setExplain('');
    }
    };
    return (
          <div className="container">
            <div className="main">
            <label>Heading:<br />
          <input type="text" onChange={handleOnChange} value={title}  /><br />
          </label>
          <label>Explain: <br />
          <textarea  onChange={whandleOnChange} value={explain} />
          </label>
        <button onClick={createTuto} className='btn'>Done</button>
        <button onClick={() => navigate(-1)} className='btn'>Back</button>
            </div>
        </div>
  );
}

export default AddTuto;