import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {                // this is parrent
  return (
    <div className="App">
      <h1>Hello World from Haroon</h1>  
      <hr/>
      <hr/>
        <Dinner dishName = "Chiken biryani" sweetDish="Lab-e-Sheeren" />  
        <hr/>            
        <Dinner dishName = "Mutton Kunna" sweetDish="Ras Malai" />              
        <hr/>
        <Dinner dishName = "Gola Kabab" sweetDish="Rabri Kheer" />              
        <hr/>
    </div>                      // this is child
  );
} 

export default App;
