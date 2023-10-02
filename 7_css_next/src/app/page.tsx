import ThemeButtom from "@/components/themeButtom"

export default function Home() {
  return (
    // Definindo a força qual a cor da dark e light
    <main className="flex min-h-screen flex-col p-24 gap-5 bg-blue-700 dark:bg-red-700">
      <h1>Página de Home</h1>
      <ThemeButtom />
    </main>
  )
}
