'use client'
import React from 'react'
import styles from './navbar.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  console.log(pathname)

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
        <Link
            href="/"
            className={`${pathname === '/' ? styles.active : ''}`}
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            href="/people"
            className={`${pathname === '/people' ? styles.active : ''}`}
          >
            Pessoa
          </Link>
        </li>
        <li><Link href="/">Teste</Link></li>
        <li><Link href="/">Teste</Link></li>
      </ul>
    </nav>
  )
}
