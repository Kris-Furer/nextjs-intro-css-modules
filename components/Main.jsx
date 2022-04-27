import React from 'react'
import styles from '../styles/Main.module.css'
import color from '../styles/color.module.css'

function Main({children}) {
  return (
    <div className={`${styles.container} ${color.bgDark}`}>{children}</div>
  )
}

export default Main