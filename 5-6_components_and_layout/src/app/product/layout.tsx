import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'Página de descrição'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col p-12">
      Seção de produtos
      {children}
    </main>
  )
}