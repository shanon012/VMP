"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
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
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Separator } from "../components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export default function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [autoScan, setAutoScan] = useState(true);

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">환경설정</h2>
        <Button>변경사항 저장</Button>
      </div>
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="tabs-list">
          <TabsTrigger value="general" className="tabs-trigger">
            일반
          </TabsTrigger>
          <TabsTrigger value="notifications" className="tabs-trigger">
            알림
          </TabsTrigger>
          <TabsTrigger value="security" className="tabs-trigger">
            보안
          </TabsTrigger>
          <TabsTrigger value="advanced" className="tabs-trigger">
            고급
          </TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="tabs-content space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>일반 설정</CardTitle>
              <CardDescription>
                기본적인 시스템 설정을 관리합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">언어</Label>
                <Select defaultValue="ko">
                  <SelectTrigger id="language" className="select-trigger">
                    <SelectValue placeholder="언어 선택" />
                  </SelectTrigger>
                  <SelectContent className="select-content">
                    <SelectItem value="ko" className="select-item">
                      한국어
                    </SelectItem>
                    <SelectItem value="en" className="select-item">
                      English
                    </SelectItem>
                    <SelectItem value="ja" className="select-item">
                      日本語
                    </SelectItem>
                    <SelectItem value="zh" className="select-item">
                      中文
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">시간대</Label>
                <Select defaultValue="asia-seoul">
                  <SelectTrigger id="timezone" className="select-trigger">
                    <SelectValue placeholder="시간대 선택" />
                  </SelectTrigger>
                  <SelectContent className="select-content">
                    <SelectItem value="asia-seoul" className="select-item">
                      아시아/서울 (GMT+9)
                    </SelectItem>
                    <SelectItem value="america-la" className="select-item">
                      미국/로스앤젤레스 (GMT-8)
                    </SelectItem>
                    <SelectItem value="europe-london" className="select-item">
                      유럽/런던 (GMT+0)
                    </SelectItem>
                    <SelectItem value="asia-tokyo" className="select-item">
                      아시아/도쿄 (GMT+9)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date-format">날짜 형식</Label>
                <Select defaultValue="yyyy-mm-dd">
                  <SelectTrigger id="date-format" className="select-trigger">
                    <SelectValue placeholder="날짜 형식 선택" />
                  </SelectTrigger>
                  <SelectContent className="select-content">
                    <SelectItem value="yyyy-mm-dd" className="select-item">
                      YYYY-MM-DD
                    </SelectItem>
                    <SelectItem value="dd-mm-yyyy" className="select-item">
                      DD-MM-YYYY
                    </SelectItem>
                    <SelectItem value="mm-dd-yyyy" className="select-item">
                      MM-DD-YYYY
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-scan">자동 스캔</Label>
                  <p className="text-sm text-muted-foreground">
                    새 자산 등록 시 자동으로 취약점 스캔을 실행합니다.
                  </p>
                </div>
                <Switch
                  id="auto-scan"
                  checked={autoScan}
                  onCheckedChange={setAutoScan}
                  className="switch-root peer"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>저장</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="tabs-content space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>알림 설정</CardTitle>
              <CardDescription>
                알림 수신 방법 및 빈도를 설정합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">이메일 알림</Label>
                  <p className="text-sm text-muted-foreground">
                    취약점 발견 및 조치 필요 시 이메일로 알림을 받습니다.
                  </p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                  className="switch-root peer"
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sms-notifications">SMS 알림</Label>
                  <p className="text-sm text-muted-foreground">
                    긴급한 취약점 발견 시 SMS로 알림을 받습니다.
                  </p>
                </div>
                <Switch
                  id="sms-notifications"
                  checked={smsNotifications}
                  onCheckedChange={setSmsNotifications}
                  className="switch-root peer"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notification-email">알림 수신 이메일</Label>
                <Input
                  id="notification-email"
                  type="email"
                  placeholder="example@company.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notification-phone">알림 수신 전화번호</Label>
                <Input
                  id="notification-phone"
                  type="tel"
                  placeholder="010-1234-5678"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>저장</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>보안 설정</CardTitle>
              <CardDescription>
                계정 및 시스템 보안 설정을 관리합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">현재 비밀번호</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">새 비밀번호</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">비밀번호 확인</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="session-timeout">세션 타임아웃 (분)</Label>
                <Input
                  id="session-timeout"
                  type="number"
                  defaultValue={30}
                  min={5}
                  max={120}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>저장</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="advanced" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>고급 설정</CardTitle>
              <CardDescription>시스템 고급 설정을 관리합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="scan-interval">스캔 주기 (일)</Label>
                <Input
                  id="scan-interval"
                  type="number"
                  defaultValue={30}
                  min={1}
                  max={365}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="report-retention">
                  보고서 보관 기간 (개월)
                </Label>
                <Input
                  id="report-retention"
                  type="number"
                  defaultValue={12}
                  min={1}
                  max={60}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="api-key">API 키</Label>
                <div className="flex space-x-2">
                  <Input
                    id="api-key"
                    type="text"
                    value="sk_live_51NXxXXXXXXXXXXXXXXXXXXXX"
                    readOnly
                  />
                  <Button variant="outline">재생성</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>저장</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
