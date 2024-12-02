"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { SortableTaskItem } from "./sortable-task-item"

interface Task {
  id: number
  title: string
  project: string
  priority: string
}

interface TaskColumnProps {
  title: string
  tasks: Task[]
  id: string
}

export function TaskColumn({ title, tasks, id }: TaskColumnProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
            {tasks.length}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <SortableContext
          items={tasks.map((task) => `${id}-${task.id}`)}
          strategy={verticalListSortingStrategy}
        >
          {tasks.map((task) => (
            <SortableTaskItem
              key={task.id}
              task={task}
              columnId={id}
            />
          ))}
        </SortableContext>
      </CardContent>
    </Card>
  )
}