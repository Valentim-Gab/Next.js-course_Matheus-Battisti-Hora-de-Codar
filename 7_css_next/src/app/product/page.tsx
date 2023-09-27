import React from 'react'
import Link from 'next/link'

export default function Product() {
  return (
    <section className="flex flex-col gap-5">
      <h1>Escolha um produto</h1>
      <Link href="/product/shirt">Camisa</Link>
      <Link href="/product/pants">Calça</Link>
      <Link href="/">Voltar</Link>
    </section>
  )
}
