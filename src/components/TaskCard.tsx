import { Todo } from '../store/atoms'

interface TaskCardProps {
  task: Todo
  onToggle: (task: Todo) => void
}

export function TaskCard({ task, onToggle }: TaskCardProps) {
  return (
    <div className="task-card" onClick={() => onToggle(task)}>
      <p>{task.todo}</p>
    </div>
  )
}