import React from 'react'
import './todo.scss'

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export default async function Todo() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos: Todo[] = await data.json()

  return (
    <main className='min-h-screen flex flex-col items-center p-5'>
      <h1>Tarefas a fazer:</h1>
      <ul className='todo-list'>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </main>
  )
}
