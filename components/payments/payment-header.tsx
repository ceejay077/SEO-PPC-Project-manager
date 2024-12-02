"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AddPaymentDialog } from "./add-payment-dialog"

export function PaymentHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
        <p className="text-muted-foreground">
          Track and manage all payment transactions
        </p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <Input
          placeholder="Search payments..."
          className="md:w-[300px]"
        />
        <AddPaymentDialog />
      </div>
    </div>
  )
}