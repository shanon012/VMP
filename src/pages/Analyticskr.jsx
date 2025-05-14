"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"

// 월별 취약점 발견 데이터
const monthlyData = [
  { name: "1월", 상: 12, 중: 18, 하: 25 },
  { name: "2월", 상: 15, 중: 20, 하: 22 },
  { name: "3월", 상: 10, 중: 15, 하: 18 },
  { name: "4월", 상: 8, 중: 12, 하: 15 },
  { name: "5월", 상: 14, 중: 22, 하: 28 },
  { name: "6월", 상: 18, 중: 25, 하: 30 },
  { name: "7월", 상: 16, 중: 20, 하: 26 },
  { name: "8월", 상: 12, 중: 18, 하: 22 },
  { name: "9월", 상: 10, 중: 15, 하: 20 },
  { name: "10월", 상: 15, 중: 22, 하: 28 },
  { name: "11월", 상: 20, 중: 28, 하: 35 },
  { name: "12월", 상: 18, 중: 25, 하: 30 },
]

// 취약점 유형별 데이터
const vulnerabilityTypeData = [
  { name: "인젝션", value: 35, color: "#ef4444" },
  { name: "인증 및 인가", value: 25, color: "#f97316" },
  { name: "XSS", value: 18, color: "#eab308" },
  { name: "설정 오류", value: 15, color: "#22c55e" },
  { name: "암호화 취약점", value: 12, color: "#3b82f6" },
  { name: "기타", value: 5, color: "#a855f7" },
]

// 조치율 추이 데이터
const remediationTrendData = [
  { name: "1월", 조치율: 65 },
  { name: "2월", 조치율: 68 },
  { name: "3월", 조치율: 70 },
  { name: "4월", 조치율: 72 },
  { name: "5월", 조치율: 75 },
  { name: "6월", 조치율: 78 },
  { name: "7월", 조치율: 80 },
  { name: "8월", 조치율: 82 },
  { name: "9월", 조치율: 85 },
  { name: "10월", 조치율: 88 },
  { name: "11월", 조치율: 90 },
  { name: "12월", 조치율: 92 },
]

// 부서별 취약점 현황
const departmentData = [
  { name: "개발팀", 상: 15, 중: 22, 하: 30 },
  { name: "인프라팀", 상: 25, 중: 35, 하: 40 },
  { name: "보안팀", 상: 5, 중: 10, 하: 15 },
  { name: "QA팀", 상: 8, 중: 12, 하: 18 },
  { name: "기획팀", 상: 3, 중: 8, 하: 12 },
]

// 취약점 발견 대비 조치 현황
const discoveryVsRemediationData = [
  { name: "1월", 발견: 55, 조치: 35 },
  { name: "2월", 발견: 58, 조치: 40 },
  { name: "3월", 발견: 43, 조치: 30 },
  { name: "4월", 발견: 35, 조치: 25 },
  { name: "5월", 발견: 64, 조치: 48 },
  { name: "6월", 발견: 73, 조치: 57 },
  { name: "7월", 발견: 62, 조치: 50 },
  { name: "8월", 발견: 52, 조치: 43 },
  { name: "9월", 발견: 45, 조치: 38 },
  { name: "10월", 발견: 65, 조치: 57 },
  { name: "11월", 발견: 83, 조치: 75 },
  { name: "12월", 발견: 73, 조치: 67 },
]

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("year")
  const [activeTab, setActiveTab] = useState("monthly")

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">취약점 트렌드 분석</h1>
          <p className="text-muted-foreground">취약점 발견 및 조치 현황을 분석하고 트렌드를 확인할 수 있습니다</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => setTimeRange("month")}>
            월간
          </Button>
          <Button variant={timeRange === "year" ? "default" : "outline"} onClick={() => setTimeRange("year")}>
            연간
          </Button>
          <Button variant="outline">내보내기</Button>
        </div>
      </div>

      <Tabs defaultValue="monthly" onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="monthly">월별 추이</TabsTrigger>
          <TabsTrigger value="department">부서별 현황</TabsTrigger>
          <TabsTrigger value="type">취약점 유형</TabsTrigger>
          <TabsTrigger value="remediation">조치 현황</TabsTrigger>
        </TabsList>

        <TabsContent value="monthly">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>월별 취약점 발견 추이</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="상" name="심각" fill="#ef4444" />
                      <Bar dataKey="중" name="중요" fill="#eab308" />
                      <Bar dataKey="하" name="낮음" fill="#22c55e" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>월별 조치율 추이</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={remediationTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="조치율" stroke="#3b82f6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>취약점 발견 대비 조치 현황</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={discoveryVsRemediationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="발견" fill="#f97316" />
                      <Bar dataKey="조치" fill="#22c55e" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="department">
          <Card>
            <CardHeader>
              <CardTitle>부서별 취약점 현황</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={departmentData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="상" name="심각" fill="#ef4444" stackId="a" />
                    <Bar dataKey="중" name="중요" fill="#eab308" stackId="a" />
                    <Bar dataKey="하" name="낮음" fill="#22c55e" stackId="a" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="type">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>취약점 유형별 분포</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={vulnerabilityTypeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {vulnerabilityTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>취약점 유형별 상세</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {vulnerabilityTypeData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span>{item.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span>{item.value}건</span>
                        <span>
                          {(
                            (item.value / vulnerabilityTypeData.reduce((acc, curr) => acc + curr.value, 0)) *
                            100
                          ).toFixed(1)}
                          %
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="remediation">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>심각도별 조치율</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="destructive">심각</Badge>
                        <span>조치율</span>
                      </div>
                      <span className="font-bold">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "78%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-yellow-500">중요</Badge>
                        <span>조치율</span>
                      </div>
                      <span className="font-bold">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-500">낮음</Badge>
                        <span>조치율</span>
                      </div>
                      <span className="font-bold">52%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "52%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>평균 조치 소요 시간</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="destructive">심각</Badge>
                        <span>평균 조치 시간</span>
                      </div>
                      <span className="font-bold">3.5일</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-yellow-500">중요</Badge>
                        <span>평균 조치 시간</span>
                      </div>
                      <span className="font-bold">7.2일</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-500">낮음</Badge>
                        <span>평균 조치 시간</span>
                      </div>
                      <span className="font-bold">12.5일</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
    </div>
  )
}
