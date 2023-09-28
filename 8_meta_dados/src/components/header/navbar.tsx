import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
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
