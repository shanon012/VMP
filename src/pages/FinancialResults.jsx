"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

export default function FinancialResults() {
  const [results, setResults] = useState([
    {
      id: "SEC-001",
      title: "인터넷뱅킹 보안성 심의",
      type: "소스코드",
      date: "2023-06-15",
      system: "인터넷뱅킹",
      status: "조치 필요",
      vulnerabilities: 8,
    },
    {
      id: "SEC-002",
      title: "모바일뱅킹 보안성 심의",
      type: "모의해킹",
      date: "2023-06-10",
      system: "모바일뱅킹",
      status: "조치 중",
      vulnerabilities: 5,
    },
    {
      id: "SEC-003",
      title: "기업뱅킹 보안성 심의",
      type: "인프라",
      date: "2023-06-05",
      system: "기업뱅킹",
      status: "조치 완료",
      vulnerabilities: 3,
    },
    {
      id: "SEC-004",
      title: "ATM 시스템 보안성 심의",
      type: "소스코드",
      date: "2023-05-28",
      system: "ATM",
      status: "예외 승인",
      vulnerabilities: 4,
    },
    {
      id: "SEC-005",
      title: "텔레뱅킹 보안성 심의",
      type: "인프라",
      date: "2023-05-20",
      system: "텔레뱅킹",
      status: "조치 필요",
      vulnerabilities: 6,
    },
  ])

  const getTypeBadge = (type) => {
    switch (type) {
      case "소스코드":
        return <Badge variant="outline">소스코드</Badge>
      case "인프라":
        return <Badge variant="secondary">인프라</Badge>
      case "모의해킹":
        return <Badge variant="default">모의해킹</Badge>
      default:
        return <Badge>{type}</Badge>
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
        <h2 className="text-3xl font-bold tracking-tight">보안성심의 취약점 점검 결과</h2>
        <Button>보고서 생성</Button>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="tabs-list">
          <TabsTrigger value="all" className="tabs-trigger">
            모든 결과
          </TabsTrigger>
          <TabsTrigger value="source" className="tabs-trigger">
            소스코드
          </TabsTrigger>
          <TabsTrigger value="infra" className="tabs-trigger">
            인프라
          </TabsTrigger>
          <TabsTrigger value="pentest" className="tabs-trigger">
            모의해킹
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="tabs-content space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>모든 보안성심의 결과</CardTitle>
              <CardDescription>시스템에 등록된 모든 보안성심의 취약점 점검 결과 목록입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>제목</TableHead>
                    <TableHead>유형</TableHead>
                    <TableHead>점검일</TableHead>
                    <TableHead>시스템</TableHead>
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
                      <TableCell>{getTypeBadge(result.type)}</TableCell>
                      <TableCell>{result.date}</TableCell>
                      <TableCell>{result.system}</TableCell>
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
        <TabsContent value="source" className="tabs-content space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>소스코드 취약점 결과</CardTitle>
              <CardDescription>소스코드 분석을 통해 발견된 취약점 점검 결과입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>제목</TableHead>
                    <TableHead>유형</TableHead>
                    <TableHead>점검일</TableHead>
                    <TableHead>시스템</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>취약점 수</TableHead>
                    <TableHead>작업</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results
                    .filter((result) => result.type === "소스코드")
                    .map((result) => (
                      <TableRow key={result.id}>
                        <TableCell>{result.id}</TableCell>
                        <TableCell>{result.title}</TableCell>
                        <TableCell>{getTypeBadge(result.type)}</TableCell>
                        <TableCell>{result.date}</TableCell>
                        <TableCell>{result.system}</TableCell>
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
        <TabsContent value="infra" className="tabs-content space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>인프라 취약점 결과</CardTitle>
              <CardDescription>인프라 분석을 통해 발견된 취약점 점검 결과입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>제목</TableHead>
                    <TableHead>유형</TableHead>
                    <TableHead>점검일</TableHead>
                    <TableHead>시스템</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>취약점 수</TableHead>
                    <TableHead>작업</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results
                    .filter((result) => result.type === "인프라")
                    .map((result) => (
                      <TableRow key={result.id}>
                        <TableCell>{result.id}</TableCell>
                        <TableCell>{result.title}</TableCell>
                        <TableCell>{getTypeBadge(result.type)}</TableCell>
                        <TableCell>{result.date}</TableCell>
                        <TableCell>{result.system}</TableCell>
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
        <TabsContent value="pentest" className="tabs-content space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>모의해킹 취약점 결과</CardTitle>
              <CardDescription>모의해킹을 통해 발견된 취약점 점검 결과입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>제목</TableHead>
                    <TableHead>유형</TableHead>
                    <TableHead>점검일</TableHead>
                    <TableHead>시스템</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>취약점 수</TableHead>
                    <TableHead>작업</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results
                    .filter((result) => result.type === "모의해킹")
                    .map((result) => (
                      <TableRow key={result.id}>
                        <TableCell>{result.id}</TableCell>
                        <TableCell>{result.title}</TableCell>
                        <TableCell>{getTypeBadge(result.type)}</TableCell>
                        <TableCell>{result.date}</TableCell>
                        <TableCell>{result.system}</TableCell>
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
