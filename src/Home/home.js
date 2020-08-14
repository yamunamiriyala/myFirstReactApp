import React from 'react';
import Email from '../Email/email';


function Home(props) {
 return(
     <>
     <p>Here the counter is {props.counter}</p>
     <Email email="yami@gmail.com" />
     </>
 )


    
}
export default Home;