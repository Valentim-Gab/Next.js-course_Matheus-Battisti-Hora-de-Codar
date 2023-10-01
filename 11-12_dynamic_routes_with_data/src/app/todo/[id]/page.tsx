import { Todo } from '@/interfaces/Todo'
import Link from 'next/link'
import React from 'react'

interface TodoProps {
  params: {
    id: number
  }
}

export default async function Todo({ params }: TodoProps) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
  const todo: Todo = await data.json()

  return (
    <div className='flex flex-col gap-5 items-center p-5 min-h-screen'>
      <Link href='/todo'>Voltar</Link>
      <h1>Exibindo o todo: { todo.title }</h1>

      <div className='flex flex-col gap-5 items-center p-5'>
        <p>Comentários: la la la...</p>
        <Link href={`/todo/${todo.id}/comments/1`}>
          Detalhes
        </Link>
        <hr />
      </div>
      <div className='flex flex-col gap-5 items-center p-5'>
        <p>Comentários: la la la...</p>
        <Link href={`/todo/${todo.id}/comments/2`}>
          Detalhes
        </Link>
        <hr />
      </div>
      <div className='flex flex-col gap-5 items-center p-5'>
        <p>Comentários: la la la...</p>
        <Link href={`/todo/${todo.id}/comments/3`}>
          Detalhes
        </Link>
        <hr />
      </div>
    </div>
  )
}
