"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { FileEdit, UserPlus, FolderPlus, DollarSign } from "lucide-react"

const activities = [
  {
    icon: UserPlus,
    description: "New client added: Tech Solutions Inc.",
    timestamp: "2 hours ago",
  },
  {
    icon: FolderPlus,
    description: "New SEO project created for Digital Dynamics",
    timestamp: "4 hours ago",
  },
  {
    icon: FileEdit,
    description: "Updated content strategy for WebTech Pro",
    timestamp: "6 hours ago",
  },
  {
    icon: DollarSign,
    description: "Payment received from Marketing Masters",
    timestamp: "8 hours ago",
  },
]

export function RecentActivity() {
  return (
    <ScrollArea className="h-[350px]">
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon
          return (
            <div key={index} className="flex items-start space-x-4">
              <div className="rounded-full bg-muted p-2">
                <Icon className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <p className="text-sm">{activity.description}</p>
                <p className="text-sm text-muted-foreground">
                  {activity.timestamp}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </ScrollArea>
  )
}