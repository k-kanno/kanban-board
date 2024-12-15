import { atom } from 'jotai'

export interface Todo {
  id: number
  todo: string
  completed: boolean
  userId: number
}

export const todosAtom = atom<Todo[]>([])

export const columnAtom = atom((get) => {
  const todos = get(todosAtom)
  return {
    todo: todos.filter((t) => !t.completed),
    done: todos.filter((t) => t.completed),
  }
})