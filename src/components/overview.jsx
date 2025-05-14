"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

const data = [
  {
    name: "1월",
    발견: 18,
    조치: 12,
  },
  {
    name: "2월",
    발견: 22,
    조치: 15,
  },
  {
    name: "3월",
    발견: 25,
    조치: 20,
  },
  {
    name: "4월",
    발견: 20,
    조치: 18,
  },
  {
    name: "5월",
    발견: 15,
    조치: 14,
  },
  {
    name: "6월",
    발견: 19,
    조치: 16,
  },
  {
    name: "7월",
    발견: 24,
    조치: 21,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Legend />
        <Bar dataKey="발견" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        <Bar dataKey="조치" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
