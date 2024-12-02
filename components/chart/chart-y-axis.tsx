"use client"

import { YAxis } from "recharts"

export function ChartYAxis() {
  return (
    <YAxis
      stroke="#888888"
      fontSize={12}
      tickLine={false}
      axisLine={false}
      tickFormatter={(value) => `$${value}`}
    />
  )
}