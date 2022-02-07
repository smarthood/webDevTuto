import React from 'react';
import firebase from './firebase';
import '../App.css'
import { useState } from 'react';

export default function Todo({ todo }) {
  const deleteTodo = () => {
    const todoRef = firebase.database().ref('HTML').child(todo.id);
    todoRef.remove();
  };
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);  };
  return (
    <div className='container'>
            <div className="box1"></div>
      <div className="box">
      <h1>{todo.title}</h1>
      <button onClick={handleToggle} className={isActive ? null : 'invert'}><img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-down-arrow-arrows-dreamstale-lineal-dreamstale-2.png"/></button>
      <hr></hr>
      <div className={isActive ? "hide" : 'show'}>
      <p>{todo.explain}</p>
      </div>
      </div>

    </div>
  );
}
