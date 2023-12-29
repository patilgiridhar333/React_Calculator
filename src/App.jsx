import React from 'react'
import Displayy from './Displayy'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.module.css'
import Button from './Button'
import {useState} from 'react'

export default function App() {
  // let newString="";
  const[disp,setDisp]=useState("");
  const handleDisp=(msg)=>{
    if(msg==="C"){
       setDisp("")
       newString=""
    }
    else if(msg==="="){
       const result= eval(disp);
       setDisp(result)
    }else{
      // newString+=msg
      const message=disp+msg;
      setDisp(message);
    }
    
  }
  return (
    <center className={styles.hi}>
      <Displayy value={disp}></Displayy>
      <Button handleDisplay={handleDisp}></Button>
    </center>
  )
}
