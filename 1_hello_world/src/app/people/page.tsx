import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'People',
  description: 'People page',
}

export default function People() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>People</h1>
    </main>
  )
}