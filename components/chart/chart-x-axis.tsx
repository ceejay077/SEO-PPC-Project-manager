"use client"

import { XAxis } from "recharts"

export function ChartXAxis() {
  return (
    <XAxis
      dataKey="name"
      stroke="#888888"
      fontSize={12}
      tickLine={false}
      axisLine={false}
    />
  )
}