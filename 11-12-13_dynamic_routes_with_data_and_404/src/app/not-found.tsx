import Link from 'next/link'
import React from 'react'
import { headers } from 'next/headers'

export default async function NotFound() {
  const headersList = headers()
  const domain = headersList.get('host')

  return (
    <main className='flex flex-col items-center p-5 gap-5 min-h-screen'>
      <h1>404</h1>
      <p>Parece que esta página não existe no domínio: {domain}</p>
      <Link href='/'>INÍCIO</Link>
    </main>
  )
}
