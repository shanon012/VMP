"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Calendar } from "../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, HelpCircle, ArrowLeft, Upload } from "lucide-react";
import { format } from "date-fns";
import { cn } from "../lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { Separator } from "../components/ui/separator";

export default function NewRequestPage() {
  const [startDate, setStartDate] = useState(Date.now());
  const [endDate, setEndDate] = useState(Date.now());
  const [launchDate, setLaunchDate] = useState(Date.now());

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-64">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/requests">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            취약점 점검 신청
          </h1>
          <p className="text-muted-foreground">
            프로젝트 정보를 입력하여 취약점 점검을 신청하세요
          </p>
        </div>
      </div>

      <TooltipProvider>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>프로젝트 정보</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>취약점 점검을 위한 프로젝트 정보를 입력해주세요</p>
                </TooltipContent>
              </Tooltip>
            </CardTitle>
            <CardDescription>
              취약점 점검을 위한 프로젝트 정보를 입력해주세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid w-full gap-4">
              <div className="grid gap-2">
                <Label
                  htmlFor="project-name"
                  className="flex items-center gap-2"
                >
                  프로젝트명
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>점검할 프로젝트의 이름을 입력해주세요</p>
                    </TooltipContent>
                  </Tooltip>
                </Label>
                <Input
                  id="project-name"
                  placeholder="프로젝트명을 입력하세요"
                />
              </div>

              <Separator />
              <h3 className="text-lg font-medium">일정 정보</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2">
                    프로젝트 기간
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>프로젝트의 시작일과 종료일을 선택해주세요</p>
                      </TooltipContent>
                    </Tooltip>
                  </Label>
                  <div className="flex gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !startDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startDate
                            ? format(startDate, "yyyy-MM-dd")
                            : "시작일 선택"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <span className="flex items-center">~</span>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !endDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate
                            ? format(endDate, "yyyy-MM-dd")
                            : "종료일 선택"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label className="flex items-center gap-2">
                    오픈 예정일
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>프로젝트의 오픈 예정일을 선택해주세요</p>
                      </TooltipContent>
                    </Tooltip>
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !launchDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {launchDate
                          ? format(launchDate, "yyyy-MM-dd")
                          : "오픈 예정일 선택"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={launchDate}
                        onSelect={setLaunchDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <Separator />
              <h3 className="text-lg font-medium">담당자 정보</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label
                    htmlFor="department"
                    className="flex items-center gap-2"
                  >
                    담당부서
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>프로젝트를 담당하는 부서를 선택해주세요</p>
                      </TooltipContent>
                    </Tooltip>
                  </Label>
                  <Select>
                    <SelectTrigger id="department">
                      <SelectValue placeholder="담당부서 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dev">개발부서</SelectItem>
                      <SelectItem value="mobile">모바일개발팀</SelectItem>
                      <SelectItem value="web">웹개발팀</SelectItem>
                      <SelectItem value="backend">백엔드개발팀</SelectItem>
                      <SelectItem value="frontend">프론트엔드개발팀</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="team" className="flex items-center gap-2">
                    팀
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>프로젝트를 담당하는 팀을 선택해주세요</p>
                      </TooltipContent>
                    </Tooltip>
                  </Label>
                  <Select>
                    <SelectTrigger id="team">
                      <SelectValue placeholder="팀 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="team1">1팀</SelectItem>
                      <SelectItem value="team2">2팀</SelectItem>
                      <SelectItem value="team3">3팀</SelectItem>
                      <SelectItem value="team4">4팀</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="manager" className="flex items-center gap-2">
                  담당자
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>프로젝트 담당자의 이름을 입력해주세요</p>
                    </TooltipContent>
                  </Tooltip>
                </Label>
                <Input id="manager" placeholder="담당자 이름을 입력하세요" />
              </div>

              <Separator />
              <h3 className="text-lg font-medium">프로젝트 상세 정보</h3>

              <div className="grid gap-2">
                <Label
                  htmlFor="description"
                  className="flex items-center gap-2"
                >
                  프로젝트 설명
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>프로젝트에 대한 간략한 설명을 입력해주세요</p>
                    </TooltipContent>
                  </Tooltip>
                </Label>
                <Textarea
                  id="description"
                  placeholder="프로젝트에 대한 간략한 설명을 입력하세요"
                  rows={4}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="file" className="flex items-center gap-2">
                  첨부파일
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        프로젝트 관련 문서나 아키텍처 다이어그램 등을
                        첨부해주세요
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </Label>
                <div className="flex items-center gap-2">
                  <Input id="file" type="file" className="hidden" />
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => document.getElementById("file")?.click()}
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    파일 선택하기
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  프로젝트 관련 문서나 아키텍처 다이어그램 등을 첨부해주세요.
                  (최대 10MB)
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between gap-2">
            <Button variant="outline" asChild>
              <Link href="/dashboard/requests">취소</Link>
            </Button>
            <Button>신청하기</Button>
          </CardFooter>
        </Card>
      </TooltipProvider>
    </div>
  );
}
