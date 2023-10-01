import React from 'react'
import './todo.scss'
import { Todo } from '@/interfaces/Todo'
import Link from 'next/link'

export default async function Todos() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos: Todo[] = await data.json()

  return (
    <main className='min-h-screen flex flex-col items-center p-5'>
      <h1>Tarefas a fazer:</h1>
      <ul className='todo-list'>
        {todos.map(todo => (
          <li key={todo.id}>
            <Link href={`/todo/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
