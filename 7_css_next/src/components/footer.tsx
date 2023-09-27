import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={`${styles.footer} flex flex-col items-center p-4 bottom-0`}>
      Curso de Next.js &copy; 2023
    </footer>
  )
}
