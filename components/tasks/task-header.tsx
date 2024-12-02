"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AddTaskDialog } from "./add-task-dialog"

export function TaskHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
        <p className="text-muted-foreground">
          Manage and track project tasks
        </p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <Input
          placeholder="Search tasks..."
          className="md:w-[300px]"
        />
        <AddTaskDialog />
      </div>
    </div>
  )
}