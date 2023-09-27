import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 gap-5">
      <ul>
        <li>
          <Link href="/product">Página: Produtos</Link>
        </li>
        <li>
          <Link href="/about">Página: About</Link>
        </li>
      </ul>
      <h1>Página de Home</h1>
    </main>
  )
}
