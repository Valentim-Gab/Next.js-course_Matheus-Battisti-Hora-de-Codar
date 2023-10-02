import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-100 p-24 gap-5">
      <h1 className='title'>Página de Home</h1>
      <Image
        src="/images/city.jpg"
        width={200}
        height={200}
        alt="Cidade a noite"
      />
    </main>
  )
}
