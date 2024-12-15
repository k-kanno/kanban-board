import { useQuery } from '@tanstack/react-query'
import { useAtom, useAtomValue } from 'jotai'
import { Column } from './components/Column'
import { Todo, columnAtom, todosAtom } from './store/atoms'

function App() {
  const [todos, setTodos] = useAtom(todosAtom)
  const columns = useAtomValue(columnAtom)

  useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const response = await fetch('https://dummyjson.com/todos')
      const data = await response.json()
      setTodos(data.todos)
      return data.todos
    },
  })

  const handleToggleTask = (task: Todo) => {
    setTodos(
      todos.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  return (
    <div className="kanban-board">
      <Column
        title="To Do"
        tasks={columns.todo}
        onToggleTask={handleToggleTask}
      />
      <Column
        title="Done"
        tasks={columns.done}
        onToggleTask={handleToggleTask}
      />
    </div>
  )
}

export default App