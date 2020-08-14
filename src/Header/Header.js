import React from 'react';
import logo from '../logo.svg';
import Home from '../Home/home';

function Header(props) {
   
return(
<header className="App-header" >
        
    <h1> Username={props.username} </h1> 
        <button onClick={props.homepage} >
         homepage
        </button>
    <p> counter is {props.counter} </p>
   
    <Home counter={props.counter}/>

      
</header>
);
}

export default Header;