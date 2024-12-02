import { TaskBoard } from "@/components/tasks/task-board"
import { TaskHeader } from "@/components/tasks/task-header"

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <TaskHeader />
      <TaskBoard />
    </div>
  )
}