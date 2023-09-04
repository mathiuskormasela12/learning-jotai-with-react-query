// ========== Todo
// import all packages
import React, { type FormEvent, useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { type IResponse, type ITodo, TodoService } from '../services/todo.service'

export const Todo: React.FC = () => {
  const [todo, setTodo] = useState('')

  const queryClient = useQueryClient()
  const { isLoading, isError, data } = useQuery<IResponse<ITodo[]>>(['todos'], TodoService.ferchAllTodos)
  const createTodoMutation = useMutation(TodoService.createTodo, {
    onSuccess: async () => {
      // Agar query nya di fetch ulang
      await queryClient.invalidateQueries(['todos'])
    }
  })

  const handleAddTodo = (e: FormEvent): void => {
    e.preventDefault()
    createTodoMutation.mutate({ todoName: todo })
  }

  return (
    <div className="mt-4 container mx-auto">
      <h1 className="text-4xl text-slate-700 mb-4">Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input value={todo} onChange={(e) => { setTodo(e.target.value) }} type="text" placeholder="Todo here..." className="bg-slate-100 rounded-md pl-2 py-3 w-[15rem]" />
        <button type="submit" className="bg-sky-600 text-white px-8 block mt-3 py-3 rounded-md">
          Add
        </button>
      </form>

      {isError && <p className="text-red-600">Something went wrong</p>}

      {isLoading && <p className="text-slate-700">Loading...</p>}

      <ol className="mt-3 list-decimal" type="1">
        {data?.data.map(item => (
          <li key={item.id}>
            {item.todoName}
          </li>
        ))}
      </ol>
    </div>
  )
}
