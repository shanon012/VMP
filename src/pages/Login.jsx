"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Shield, Lock, User, Mail } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // 실제 로그인 로직은 여기에 구현
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="mx-auto grid w-full max-w-[350px] gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="mb-4 rounded-full bg-primary/10 p-4">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">취약점 관리 포털</h1>
          <p className="text-balance text-muted-foreground">
            안전한 시스템 관리를 위한 취약점 관리 포털에 오신 것을 환영합니다.
          </p>
        </div>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 tabs-list">
            <TabsTrigger value="login" className="tabs-trigger">
              로그인
            </TabsTrigger>
            <TabsTrigger value="register" className="tabs-trigger">
              회원가입
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="tabs-content">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">로그인</CardTitle>
                <CardDescription>
                  아이디와 비밀번호를 입력하여 로그인하세요.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="username" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    아이디
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="아이디를 입력하세요"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password" className="flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    비밀번호
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={handleLogin}>
                  로그인
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="register" className="tabs-content">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">회원가입</CardTitle>
                <CardDescription>
                  새 계정을 만들려면 아래 정보를 입력하세요.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    이메일
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="이메일을 입력하세요"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="new-username"
                    className="flex items-center gap-2"
                  >
                    <User className="h-4 w-4" />
                    아이디
                  </Label>
                  <Input
                    id="new-username"
                    type="text"
                    placeholder="아이디를 입력하세요"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="new-password"
                    className="flex items-center gap-2"
                  >
                    <Lock className="h-4 w-4" />
                    비밀번호
                  </Label>
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">회원가입</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
