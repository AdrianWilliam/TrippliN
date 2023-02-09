import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'
function Button(props) {
  
  return (
      <button className={styles.button} onClick={props.onClick} onChange={props.onChange}>
        {props.text}

      </button>
  )
}

export default Button