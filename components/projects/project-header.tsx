"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AddProjectDialog } from "./add-project-dialog"

export function ProjectHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">
          Manage your SEO and PPC projects
        </p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <Input
          placeholder="Search projects..."
          className="md:w-[300px]"
        />
        <AddProjectDialog />
      </div>
    </div>
  )
}