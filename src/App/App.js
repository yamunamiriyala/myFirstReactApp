import React,{useState} from 'react';
import './App.css';
import Header from '../Header/Header';

function App() {
  const [counter,setCounter]=useState(0)
  const homepage= ()=>setCounter(counter+1)
 //const Rjs = "react test"
  return (
    <div className="App">
     
      <Header username="yami" homepage={homepage} counter={counter}/>
      {/* <Header /> */}


      
    </div>
  );
}

export default App;

