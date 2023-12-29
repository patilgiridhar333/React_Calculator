import React from 'react'
import styles from './Button.module.css'

export default function Button({handleDisplay}) {
    let array=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];
  return (
    <div className={styles.daad}>
     { array.map(item=>(
        <button type="button" key={item} onClick={()=>{handleDisplay(item)}} className={`btn btn-secondary ${styles.butt}`}>{item}</button>
     ))}
    </div>
  )
}
