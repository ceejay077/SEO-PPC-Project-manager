"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import { SortableContext, arrayMove } from "@dnd-kit/sortable"
import { TaskColumn } from "./task-column"
import { TaskItem } from "./task-item"

interface Task {
  id: number
  title: string
  project: string
  priority: string
}

interface TaskState {
  todo: Task[]
  inProgress: Task[]
  completed: Task[]
}

const initialTasks: TaskState = {
  todo: [
    { id: 1, title: "Keyword Research", project: "Tech Solutions SEO", priority: "High" },
    { id: 2, title: "Content Audit", project: "Digital Dynamics", priority: "Medium" },
  ],
  inProgress: [
    { id: 3, title: "Meta Descriptions Update", project: "WebTech Pro", priority: "High" },
    { id: 4, title: "PPC Campaign Setup", project: "Tech Solutions", priority: "Medium" },
  ],
  completed: [
    { id: 5, title: "Site Analysis", project: "Digital Dynamics", priority: "Low" },
    { id: 6, title: "Competitor Research", project: "WebTech Pro", priority: "Medium" },
  ],
}

export function TaskBoard() {
  const [tasks, setTasks] = useState<TaskState>(initialTasks)
  const [activeTask, setActiveTask] = useState<Task | null>(null)
  const sensors = useSensors(useSensor(PointerSensor))

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event
    const [, taskId] = active.id.toString().split('-')
    const task = Object.values(tasks).flat().find((t) => t.id === parseInt(taskId))
    if (task) setActiveTask(task)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return

    const [activeColumn, activeTaskId] = active.id.toString().split('-')
    const [overColumn, overTaskId] = over.id.toString().split('-')

    if (activeColumn === overColumn) {
      // Reordering within the same column
      const column = activeColumn as keyof TaskState
      const newTasks = [...tasks[column]]
      const oldIndex = newTasks.findIndex((t) => t.id === parseInt(activeTaskId))
      const newIndex = newTasks.findIndex((t) => t.id === parseInt(overTaskId))
      
      setTasks({
        ...tasks,
        [column]: arrayMove(newTasks, oldIndex, newIndex),
      })
    } else {
      // Moving to a different column
      const sourceColumn = activeColumn as keyof TaskState
      const targetColumn = overColumn as keyof TaskState
      const task = tasks[sourceColumn].find((t) => t.id === parseInt(activeTaskId))
      
      if (task) {
        setTasks({
          ...tasks,
          [sourceColumn]: tasks[sourceColumn].filter((t) => t.id !== parseInt(activeTaskId)),
          [targetColumn]: [...tasks[targetColumn], task],
        })
      }
    }
    setActiveTask(null)
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="grid gap-6 md:grid-cols-3">
        <TaskColumn
          title="To Do"
          tasks={tasks.todo}
          id="todo"
        />
        <TaskColumn
          title="In Progress"
          tasks={tasks.inProgress}
          id="inProgress"
        />
        <TaskColumn
          title="Completed"
          tasks={tasks.completed}
          id="completed"
        />
      </div>
      <DragOverlay>
        {activeTask ? (
          <div className="w-[calc(100vw/4)]">
            <TaskItem task={activeTask} />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}