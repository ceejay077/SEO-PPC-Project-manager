import { PaymentList } from "@/components/payments/payment-list"
import { PaymentHeader } from "@/components/payments/payment-header"

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <PaymentHeader />
      <PaymentList />
    </div>
  )
}