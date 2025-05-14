"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

export default function Results() {
  const [results, setResults] = useState([
    {
      id: "VUL-001",
      title: "웹 서버 취약점 점검 결과",
      severity: "높음",
      date: "2023-06-15",
      asset: "웹 서버 (WS-001)",
      status: "조치 필요",
      vulnerabilities: 12,
    },
    {
      id: "VUL-002",
      title: "데이터베이스 보안 점검 결과",
      severity: "중간",
      date: "2023-06-10",
      asset: "데이터베이스 서버 (DB-003)",
      status: "조치 중",
      vulnerabilities: 8,
    },
    {
      id: "VUL-003",
      title: "클라우드 인프라 취약점 점검 결과",
      severity: "낮음",
      date: "2023-06-05",
      asset: "클라우드 인프라 (CL-002)",
      status: "조치 완료",
      vulnerabilities: 5,
    },
    {
      id: "VUL-004",
      title: "네트워크 장비 취약점 점검 결과",
      severity: "높음",
      date: "2023-05-28",
      asset: "방화벽 (FW-001)",
      status: "예외 승인",
      vulnerabilities: 7,
    },
    {
      id: "VUL-005",
      title: "서버 OS 취약점 점검 결과",
      severity: "중간",
      date: "2023-05-20",
      asset: "애플리케이션 서버 (AS-004)",
      status: "조치 필요",
      vulnerabilities: 10,
    },
  ])

  const getSeverityBadge = (severity) => {
    switch (severity) {
      case "높음":
        return <Badge variant="destructive">높음</Badge>
      case "중간":
        return <Badge variant="warning">중간</Badge>
      case "낮음":
        return <Badge variant="outline">낮음</Badge>
      default:
        return <Badge>{severity}</Badge>
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "조치 필요":
        return <Badge variant="destructive">조치 필요</Badge>
      case "조치 중":
        return <Badge variant="secondary">조치 중</Badge>
      case "조치 완료":
        return <Badge variant="success">조치 완료</Badge>
      case "예외 승인":
        return <Badge variant="outline">예외 승인</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">전자금융기반시설 점검 결과</h2>
        <Button>보고서 생성</Button>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="tabs-list">
          <TabsTrigger value="all" className="tabs-trigger">
            모든 결과
          </TabsTrigger>
          <TabsTrigger value="high" className="tabs-trigger">
            높은 위험
          </TabsTrigger>
          <TabsTrigger value="medium" className="tabs-trigger">
            중간 위험
          </TabsTrigger>
          <TabsTrigger value="low" className="tabs-trigger">
            낮은 위험
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="tabs-content space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>모든 취약점 점검 결과</CardTitle>
              <CardDescription>시스템에 등록된 모든 취약점 점검 결과 목록입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>제목</TableHead>
                    <TableHead>위험도</TableHead>
                    <TableHead>점검일</TableHead>
                    <TableHead>자산</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>취약점 수</TableHead>
                    <TableHead>작업</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results.map((result) => (
                    <TableRow key={result.id}>
                      <TableCell>{result.id}</TableCell>
                      <TableCell>{result.title}</TableCell>
                      <TableCell>{getSeverityBadge(result.severity)}</TableCell>
                      <TableCell>{result.date}</TableCell>
                      <TableCell>{result.asset}</TableCell>
                      <TableCell>{getStatusBadge(result.status)}</TableCell>
                      <TableCell>{result.vulnerabilities}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            상세보기
                          </Button>
                          <Button variant="outline" size="sm">
                            조치계획
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="high" className="tabs-content space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>높은 위험 취약점 결과</CardTitle>
              <CardDescription>높은 위험도로 분류된 취약점 점검 결과입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>제목</TableHead>
                    <TableHead>위험도</TableHead>
                    <TableHead>점검일</TableHead>
                    <TableHead>자산</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>취약점 수</TableHead>
                    <TableHead>작업</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results
                    .filter((result) => result.severity === "높음")
                    .map((result) => (
                      <TableRow key={result.id}>
                        <TableCell>{result.id}</TableCell>
                        <TableCell>{result.title}</TableCell>
                        <TableCell>{getSeverityBadge(result.severity)}</TableCell>
                        <TableCell>{result.date}</TableCell>
                        <TableCell>{result.asset}</TableCell>
                        <TableCell>{getStatusBadge(result.status)}</TableCell>
                        <TableCell>{result.vulnerabilities}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              상세보기
                            </Button>
                            <Button variant="outline" size="sm">
                              조치계획
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="medium" className="tabs-content space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>중간 위험 취약점 결과</CardTitle>
              <CardDescription>중간 위험도로 분류된 취약점 점검 결과입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>제목</TableHead>
                    <TableHead>위험도</TableHead>
                    <TableHead>점검일</TableHead>
                    <TableHead>자산</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>취약점 수</TableHead>
                    <TableHead>작업</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results
                    .filter((result) => result.severity === "중간")
                    .map((result) => (
                      <TableRow key={result.id}>
                        <TableCell>{result.id}</TableCell>
                        <TableCell>{result.title}</TableCell>
                        <TableCell>{getSeverityBadge(result.severity)}</TableCell>
                        <TableCell>{result.date}</TableCell>
                        <TableCell>{result.asset}</TableCell>
                        <TableCell>{getStatusBadge(result.status)}</TableCell>
                        <TableCell>{result.vulnerabilities}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              상세보기
                            </Button>
                            <Button variant="outline" size="sm">
                              조치계획
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="low" className="tabs-content space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>낮은 위험 취약점 결과</CardTitle>
              <CardDescription>낮은 위험도로 분류된 취약점 점검 결과입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>제목</TableHead>
                    <TableHead>위험도</TableHead>
                    <TableHead>점검일</TableHead>
                    <TableHead>자산</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>취약점 수</TableHead>
                    <TableHead>작업</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results
                    .filter((result) => result.severity === "낮음")
                    .map((result) => (
                      <TableRow key={result.id}>
                        <TableCell>{result.id}</TableCell>
                        <TableCell>{result.title}</TableCell>
                        <TableCell>{getSeverityBadge(result.severity)}</TableCell>
                        <TableCell>{result.date}</TableCell>
                        <TableCell>{result.asset}</TableCell>
                        <TableCell>{getStatusBadge(result.status)}</TableCell>
                        <TableCell>{result.vulnerabilities}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              상세보기
                            </Button>
                            <Button variant="outline" size="sm">
                              조치계획
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
