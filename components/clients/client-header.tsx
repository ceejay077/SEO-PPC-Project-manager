"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AddClientDialog } from "./add-client-dialog"

export function ClientHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
        <p className="text-muted-foreground">
          Manage your client relationships and projects
        </p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <Input
          placeholder="Search clients..."
          className="md:w-[300px]"
        />
        <AddClientDialog />
      </div>
    </div>
  )
}