import React from 'react'
import styles from './Displayy.module.css'

export default function Displayy({value}) {
  return (
    <div className={styles.hi}>
      <input className={styles.input} value={value} type="text"  readOnly />
    </div>
  )
}
