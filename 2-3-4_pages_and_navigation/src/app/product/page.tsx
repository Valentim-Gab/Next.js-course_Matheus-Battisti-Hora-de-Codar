import React from 'react'
import Link from 'next/link'

export default function Product() {
  return (
    <main className="flex min-h-screen flex-col p-24 gap-5">
      <h1>Página de produto</h1>
      <Link href="/">Voltar</Link>
    </main>
  )
}
