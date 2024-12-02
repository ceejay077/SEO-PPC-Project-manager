"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit2, FileText } from "lucide-react"

const payments = [
  {
    id: 1,
    client: "Tech Solutions Inc.",
    amount: 2500,
    date: "2024-02-15",
    status: "Paid",
    invoice: "INV-2024-001",
  },
  {
    id: 2,
    client: "Digital Dynamics",
    amount: 1800,
    date: "2024-02-10",
    status: "Pending",
    invoice: "INV-2024-002",
  },
  {
    id: 3,
    client: "WebTech Pro",
    amount: 3200,
    date: "2024-02-05",
    status: "Paid",
    invoice: "INV-2024-003",
  },
]

export function PaymentList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell className="font-medium">{payment.invoice}</TableCell>
              <TableCell>{payment.client}</TableCell>
              <TableCell>${payment.amount.toLocaleString()}</TableCell>
              <TableCell>{payment.date}</TableCell>
              <TableCell>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    payment.status === "Paid"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {payment.status}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}