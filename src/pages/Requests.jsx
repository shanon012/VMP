"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

export default function Requests() {
  const [requests, setRequests] = useState([
    {
      id: "REQ-001",
      title: "웹 서버 취약점 점검",
      status: "대기",
      date: "2023-05-15",
      requester: "김철수",
      department: "IT 보안팀",
    },
    {
      id: "REQ-002",
      title: "데이터베이스 보안 점검",
      status: "진행 중",
      date: "2023-05-10",
      requester: "이영희",
      department: "데이터 관리팀",
    },
    {
      id: "REQ-003",
      title: "클라우드 인프라 취약점 점검",
      status: "완료",
      date: "2023-05-05",
      requester: "박지민",
      department: "클라우드 운영팀",
    },
    {
      id: "REQ-004",
      title: "모바일 앱 보안 점검",
      status: "대기",
      date: "2023-05-18",
      requester: "최민수",
      department: "모바일 개발팀",
    },
    {
      id: "REQ-005",
      title: "네트워크 장비 취약점 점검",
      status: "완료",
      date: "2023-04-28",
      requester: "정수진",
      department: "네트워크 운영팀",
    },
  ])

  const getStatusBadge = (status) => {
    switch (status) {
      case "대기":
        return <Badge variant="outline">대기</Badge>
      case "진행 중":
        return <Badge variant="secondary">진행 중</Badge>
      case "완료":
        return <Badge variant="success">완료</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">취약점 신청 현황</h2>
        <Link to="/requests/new">
          <Button>새 취약점 점검 신청</Button>
        </Link>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="tabs-list">
          <TabsTrigger value="all" className="tabs-trigger">
            전체
          </TabsTrigger>
          <TabsTrigger value="waiting" className="tabs-trigger">
            대기
          </TabsTrigger>
          <TabsTrigger value="in-progress" className="tabs-trigger">
            진행 중
          </TabsTrigger>
          <TabsTrigger value="completed" className="tabs-trigger">
            완료
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="tabs-content space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>모든 취약점 점검 신청</CardTitle>
              <CardDescription>시스템에 등록된 모든 취약점 점검 신청 목록입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>제목</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>신청일</TableHead>
                    <TableHead>신청자</TableHead>
                    <TableHead>부서</TableHead>
                    <TableHead>작업</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell>{request.id}</TableCell>
                      <TableCell>{request.title}</TableCell>
                      <TableCell>{getStatusBadge(request.status)}</TableCell>
                      <TableCell>{request.date}</TableCell>
                      <TableCell>{request.requester}</TableCell>
                      <TableCell>{request.department}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            상세보기
                          </Button>
                          <Button variant="outline" size="sm">
                            수정
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
        <TabsContent value="waiting" className="tabs-content space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>대기 중인 취약점 점검 신청</CardTitle>
              <CardDescription>승인 대기 중인 취약점 점검 신청 목록입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>제목</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>신청일</TableHead>
                    <TableHead>신청자</TableHead>
                    <TableHead>부서</TableHead>
                    <TableHead>작업</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requests
                    .filter((request) => request.status === "대기")
                    .map((request) => (
                      <TableRow key={request.id}>
                        <TableCell>{request.id}</TableCell>
                        <TableCell>{request.title}</TableCell>
                        <TableCell>{getStatusBadge(request.status)}</TableCell>
                        <TableCell>{request.date}</TableCell>
                        <TableCell>{request.requester}</TableCell>
                        <TableCell>{request.department}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              상세보기
                            </Button>
                            <Button variant="outline" size="sm">
                              수정
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
        <TabsContent value="in-progress" className="tabs-content space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>진행 중인 취약점 점검 신청</CardTitle>
              <CardDescription>현재 진행 중인 취약점 점검 신청 목록입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>제목</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>신청일</TableHead>
                    <TableHead>신청자</TableHead>
                    <TableHead>부서</TableHead>
                    <TableHead>작업</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requests
                    .filter((request) => request.status === "진행 중")
                    .map((request) => (
                      <TableRow key={request.id}>
                        <TableCell>{request.id}</TableCell>
                        <TableCell>{request.title}</TableCell>
                        <TableCell>{getStatusBadge(request.status)}</TableCell>
                        <TableCell>{request.date}</TableCell>
                        <TableCell>{request.requester}</TableCell>
                        <TableCell>{request.department}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              상세보기
                            </Button>
                            <Button variant="outline" size="sm">
                              수정
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
        <TabsContent value="completed" className="tabs-content space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>완료된 취약점 점검 신청</CardTitle>
              <CardDescription>완료된 취약점 점검 신청 목록입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>제목</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>신청일</TableHead>
                    <TableHead>신청자</TableHead>
                    <TableHead>부서</TableHead>
                    <TableHead>작업</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requests
                    .filter((request) => request.status === "완료")
                    .map((request) => (
                      <TableRow key={request.id}>
                        <TableCell>{request.id}</TableCell>
                        <TableCell>{request.title}</TableCell>
                        <TableCell>{getStatusBadge(request.status)}</TableCell>
                        <TableCell>{request.date}</TableCell>
                        <TableCell>{request.requester}</TableCell>
                        <TableCell>{request.department}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              상세보기
                            </Button>
                            <Button variant="outline" size="sm">
                              보고서
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
