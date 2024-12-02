import { ClientList } from "@/components/clients/client-list"
import { ClientHeader } from "@/components/clients/client-header"

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <ClientHeader />
      <ClientList />
    </div>
  )
}