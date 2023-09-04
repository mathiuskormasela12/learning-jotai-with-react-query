// ========== Todo Service
// import all package
import axios from 'axios'

export interface ITodo {
  id: string
  todoName: string
  createdAt: string
  updatedAt: string
}

export interface IResponse<T> {
  statusCode: number
  message?: string
  data: T
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})
console.log(import.meta.env.VITE_API_URL)

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TodoService {
  static async ferchAllTodos (): Promise<any> {
    const { data } = await api.get('/api/todos')
    return data
  }

  static async createTodo (todo: { todoName: string }): Promise<any> {
    const { data } = await api.post('/api/todos', todo)
    return data
  }
}
