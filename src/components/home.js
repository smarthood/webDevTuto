import React from 'react';
import '../App.css';
import firebase from './firebase';
import TodoList from './TodoList'
export default function Home({ todo }) {
 return (
        <div>
            <header>
      <h1>Web Develop</h1>
      </header>
      <div className="arc"></div>
      <div className="container">
        <TodoList />
      </div>
      </div>
 );
}
