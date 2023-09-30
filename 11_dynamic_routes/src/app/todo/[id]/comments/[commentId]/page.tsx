import Link from 'next/link'
import React from 'react'

interface CommentProps {
  params: {
    id: number,
    commentId: number
  }
}

export default function TodoComment({ params }: CommentProps) {
  return (
    <div className='flex flex-col gap-5 items-center p-5 min-h-screen'>
      <Link href={`/todo/${params.id}`}>
        Voltar
      </Link>
      <h1>Exibindo comentário número: {params.commentId}</h1>
    </div>
  )
}
