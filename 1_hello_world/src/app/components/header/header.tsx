import React from 'react'
import styles from './header.module.scss'
import Navbar from './navbar'

export default function Header() {
  return (
    <header className={`${styles.header} flex justify-between p-4 sticky`}>
      <p>Learning Next.js13</p>
      <Navbar></Navbar>
    </header>
  )
}
