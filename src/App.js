import React, {useState, useEffect} from 'react';

import Greeting from './components/Greeting'
import Goodbye from './components/Goodbye'
import './App.css';

function App() {

  const [status, setStatus] =  useState(true)

  useEffect(()=> {
    console.log("status has changed")
  }, [status])

  const handleClick = ()=> {
    setStatus(!status)
  }

  // const func = ()=> {
  //   const element = document.getElementById("red")
  //   element.style.color="red"
  // }

  // const banana = ()=> {
  // setStatus(true) 
  // }

  // useEffect(()=> {
  //   if (status) {
  //     func()
  //   }
  // },[status])


  return (
  <>
  <Greeting tigers ={handleClick}/>
  <Goodbye tigers ={handleClick}/>
    {
      status ? <p>I would like to welcome you</p> : 
      <p>I would like to say goodbye</p>
    }
 
  </>
  );
}

export default App;
