"use client";

import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Badge } from "../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Search, UserPlus, UserCog, Trash2 } from "lucide-react";

const users = [
  {
    id: "USR-001",
    name: "홍길동",
    email: "hong@example.com",
    department: "보안팀",
    role: "관리자",
    status: "활성",
    lastLogin: "2023-04-15 14:30",
  },
  {
    id: "USR-002",
    name: "김철수",
    email: "kim@example.com",
    department: "인프라운영팀",
    role: "일반사용자",
    status: "활성",
    lastLogin: "2023-04-14 09:15",
  },
  {
    id: "USR-003",
    name: "이영희",
    email: "lee@example.com",
    department: "개발팀",
    role: "일반사용자",
    status: "활성",
    lastLogin: "2023-04-13 16:45",
  },
  {
    id: "USR-004",
    name: "박민수",
    email: "park@example.com",
    department: "인프라운영팀",
    role: "부서관리자",
    status: "활성",
    lastLogin: "2023-04-12 11:20",
  },
  {
    id: "USR-005",
    name: "정지훈",
    email: "jung@example.com",
    department: "개발팀",
    role: "일반사용자",
    status: "비활성",
    lastLogin: "2023-03-30 10:10",
  },
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">사용자 관리</h1>
            <p className="text-muted-foreground">
              시스템 사용자를 관리하고 권한을 설정할 수 있습니다
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <UserPlus className="h-4 w-4 mr-2" />
                사용자 추가
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>새 사용자 추가</DialogTitle>
                <DialogDescription>
                  새로운 사용자 정보를 입력하세요
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    이름
                  </Label>
                  <Input id="name" placeholder="이름" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    이메일
                  </Label>
                  <Input
                    id="email"
                    placeholder="이메일"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="department" className="text-right">
                    부서
                  </Label>
                  <Select>
                    <SelectTrigger id="department" className="col-span-3">
                      <SelectValue placeholder="부서 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="security">보안팀</SelectItem>
                      <SelectItem value="infra">인프라운영팀</SelectItem>
                      <SelectItem value="dev">개발팀</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="role" className="text-right">
                    권한
                  </Label>
                  <Select>
                    <SelectTrigger id="role" className="col-span-3">
                      <SelectValue placeholder="권한 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">관리자</SelectItem>
                      <SelectItem value="dept_admin">부서관리자</SelectItem>
                      <SelectItem value="user">일반사용자</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">추가</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="이름, 이메일, 부서 검색..."
            className="max-w-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>이름</TableHead>
                  <TableHead>이메일</TableHead>
                  <TableHead>부서</TableHead>
                  <TableHead>권한</TableHead>
                  <TableHead>상태</TableHead>
                  <TableHead>마지막 로그인</TableHead>
                  <TableHead className="text-right">관리</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="h-24 text-center">
                      사용자가 없습니다
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.department}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            user.role === "관리자"
                              ? "destructive"
                              : user.role === "부서관리자"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            user.status === "활성" ? "success" : "outline"
                          }
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.lastLogin}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                <UserCog className="h-4 w-4 mr-1" />
                                수정
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>사용자 정보 수정</DialogTitle>
                                <DialogDescription>
                                  {user.name}님의 정보를 수정합니다
                                </DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label
                                    htmlFor="edit-name"
                                    className="text-right"
                                  >
                                    이름
                                  </Label>
                                  <Input
                                    id="edit-name"
                                    defaultValue={user.name}
                                    className="col-span-3"
                                  />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label
                                    htmlFor="edit-email"
                                    className="text-right"
                                  >
                                    이메일
                                  </Label>
                                  <Input
                                    id="edit-email"
                                    defaultValue={user.email}
                                    className="col-span-3"
                                  />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label
                                    htmlFor="edit-department"
                                    className="text-right"
                                  >
                                    부서
                                  </Label>
                                  <Select defaultValue="security">
                                    <SelectTrigger
                                      id="edit-department"
                                      className="col-span-3"
                                    >
                                      <SelectValue placeholder="부서 선택" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="security">
                                        보안팀
                                      </SelectItem>
                                      <SelectItem value="infra">
                                        인프라운영팀
                                      </SelectItem>
                                      <SelectItem value="dev">
                                        개발팀
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label
                                    htmlFor="edit-role"
                                    className="text-right"
                                  >
                                    권한
                                  </Label>
                                  <Select defaultValue="user">
                                    <SelectTrigger
                                      id="edit-role"
                                      className="col-span-3"
                                    >
                                      <SelectValue placeholder="권한 선택" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="admin">
                                        관리자
                                      </SelectItem>
                                      <SelectItem value="dept_admin">
                                        부서관리자
                                      </SelectItem>
                                      <SelectItem value="user">
                                        일반사용자
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label
                                    htmlFor="edit-status"
                                    className="text-right"
                                  >
                                    상태
                                  </Label>
                                  <Select
                                    defaultValue={
                                      user.status === "활성"
                                        ? "active"
                                        : "inactive"
                                    }
                                  >
                                    <SelectTrigger
                                      id="edit-status"
                                      className="col-span-3"
                                    >
                                      <SelectValue placeholder="상태 선택" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="active">
                                        활성
                                      </SelectItem>
                                      <SelectItem value="inactive">
                                        비활성
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                              <DialogFooter>
                                <Button type="submit">저장</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>

                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4 mr-1" />
                            삭제
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
