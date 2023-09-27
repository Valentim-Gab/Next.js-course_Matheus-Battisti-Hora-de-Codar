import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className="flex p-4 gap-4">
      <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/product">Produtos</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
