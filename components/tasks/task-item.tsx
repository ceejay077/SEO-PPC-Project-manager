"use client"

interface Task {
  id: number
  title: string
  project: string
  priority: string
}

interface TaskItemProps {
  task: Task
}

export function TaskItem({ task }: TaskItemProps) {
  return (
    <div className="rounded-lg border p-3 shadow-sm hover:shadow-md transition-shadow bg-white">
      <h3 className="font-medium">{task.title}</h3>
      <p className="text-sm text-muted-foreground">{task.project}</p>
      <div className="mt-2">
        <span
          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
            task.priority === "High"
              ? "bg-red-100 text-red-800"
              : task.priority === "Medium"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {task.priority}
        </span>
      </div>
    </div>
  )
}