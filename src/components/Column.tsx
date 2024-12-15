import { Todo } from '../store/atoms'
import { TaskCard } from './TaskCard'

interface ColumnProps {
  title: string
  tasks: Todo[]
  onToggleTask: (task: Todo) => void
}

export function Column({ title, tasks, onToggleTask }: ColumnProps) {
  return (
    <div className="column">
      <h2>{title}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onToggle={onToggleTask} />
      ))}
    </div>
  )
}