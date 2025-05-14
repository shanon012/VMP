import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Download, HelpCircle, BookOpen, FileText, Video } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold tracking-tight">사용 가이드</h1>
        <p className="text-muted-foreground">
          취약점 관리 포털 사용 방법을 알아보세요
        </p>

        <Tabs defaultValue="beginner">
          <TabsList className="mb-4">
            <TabsTrigger value="beginner">초보자 가이드</TabsTrigger>
            <TabsTrigger value="advanced">상세 가이드</TabsTrigger>
            <TabsTrigger value="faq">자주 묻는 질문</TabsTrigger>
          </TabsList>

          <TabsContent value="beginner">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    취약점이란 무엇인가요?
                  </CardTitle>
                  <CardDescription>
                    취약점의 기본 개념을 알아봅시다
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>
                      취약점은 컴퓨터나 시스템에 있는 약점이에요. 이 약점을 통해
                      해커가 시스템에 들어올 수 있어요. 마치 집의 문이 잠겨있지
                      않아 누구나 들어올 수 있는 것과 비슷해요.
                    </p>
                    <div className="rounded-lg bg-primary/10 p-4">
                      <h4 className="font-medium">알아두세요!</h4>
                      <p className="text-sm">
                        취약점을 빨리 발견하고 고치면 해커로부터 우리 시스템을
                        보호할 수 있어요.
                      </p>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Video className="h-4 w-4 mr-2" />
                      동영상으로 배우기
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    취약점 점검 신청하기
                  </CardTitle>
                  <CardDescription>
                    취약점 점검을 신청하는 방법을 알아봅시다
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        왼쪽 메뉴에서 <strong>취약점 점검 신청</strong>을
                        클릭해요.
                      </li>
                      <li>
                        <strong>신규 신청</strong> 버튼을 클릭해요.
                      </li>
                      <li>프로젝트 정보를 입력해요.</li>
                      <li>
                        <strong>신청하기</strong> 버튼을 클릭해요.
                      </li>
                    </ol>
                    <div className="rounded-lg bg-primary/10 p-4">
                      <h4 className="font-medium">도움말</h4>
                      <p className="text-sm">
                        각 입력 항목 옆에 있는{" "}
                        <HelpCircle className="inline h-3 w-3" /> 아이콘을
                        클릭하면 더 자세한 설명을 볼 수 있어요.
                      </p>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Video className="h-4 w-4 mr-2" />
                      동영상으로 배우기
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    취약점 결과 확인하기
                  </CardTitle>
                  <CardDescription>
                    취약점 점검 결과를 확인하는 방법을 알아봅시다
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        왼쪽 메뉴에서 <strong>취약점 점검 결과</strong>를
                        클릭해요.
                      </li>
                      <li>원하는 결과 유형을 선택해요.</li>
                      <li>
                        취약점 목록에서 <strong>상세</strong> 버튼을 클릭하면
                        자세한 정보를 볼 수 있어요.
                      </li>
                    </ol>
                    <div className="rounded-lg bg-primary/10 p-4">
                      <h4 className="font-medium">도움말</h4>
                      <p className="text-sm">
                        취약점 심각도에 따라 색상이 다르게 표시돼요. 빨간색이
                        가장 위험한 취약점이에요!
                      </p>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Video className="h-4 w-4 mr-2" />
                      동영상으로 배우기
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    조치 계획 작성하기
                  </CardTitle>
                  <CardDescription>
                    취약점 조치 계획을 작성하는 방법을 알아봅시다
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        취약점 목록에서 <strong>조치 계획</strong> 버튼을
                        클릭해요.
                      </li>
                      <li>언제, 어떻게 취약점을 고칠지 계획을 작성해요.</li>
                      <li>
                        <strong>저장</strong> 버튼을 클릭해요.
                      </li>
                    </ol>
                    <div className="rounded-lg bg-primary/10 p-4">
                      <h4 className="font-medium">도움말</h4>
                      <p className="text-sm">
                        조치 계획은 구체적으로 작성할수록 좋아요. 언제, 누가,
                        어떻게 고칠지 자세히 적어주세요.
                      </p>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Video className="h-4 w-4 mr-2" />
                      동영상으로 배우기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="advanced">
            <Card>
              <CardHeader>
                <CardTitle>상세 사용 가이드</CardTitle>
                <CardDescription>
                  취약점 관리 포털의 모든 기능에 대한 상세 가이드입니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="h-auto py-4 justify-start"
                    >
                      <FileText className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-medium">
                          취약점 관리 프로세스 가이드
                        </div>
                        <div className="text-sm text-muted-foreground">
                          전체 프로세스 이해하기
                        </div>
                      </div>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-4 justify-start"
                    >
                      <FileText className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-medium">
                          취약점 점검 신청 상세 가이드
                        </div>
                        <div className="text-sm text-muted-foreground">
                          신청서 작성 방법
                        </div>
                      </div>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-4 justify-start"
                    >
                      <FileText className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-medium">
                          취약점 조치 계획 작성 가이드
                        </div>
                        <div className="text-sm text-muted-foreground">
                          효과적인 조치 계획 작성법
                        </div>
                      </div>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-4 justify-start"
                    >
                      <FileText className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-medium">
                          취약점 예외 요청 가이드
                        </div>
                        <div className="text-sm text-muted-foreground">
                          예외 요청 작성 및 승인 과정
                        </div>
                      </div>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-4 justify-start"
                    >
                      <FileText className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-medium">관리자 기능 가이드</div>
                        <div className="text-sm text-muted-foreground">
                          관리자를 위한 기능 설명
                        </div>
                      </div>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-4 justify-start"
                    >
                      <FileText className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-medium">
                          보고서 생성 및 분석 가이드
                        </div>
                        <div className="text-sm text-muted-foreground">
                          데이터 분석 및 보고서 작성
                        </div>
                      </div>
                    </Button>
                  </div>

                  <div className="flex justify-center mt-4">
                    <Button>
                      <Download className="h-4 w-4 mr-2" />
                      전체 가이드 다운로드
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>자주 묻는 질문 (FAQ)</CardTitle>
                <CardDescription>
                  취약점 관리 포털 이용에 관한 자주 묻는 질문들입니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="flex items-center text-lg font-medium">
                      <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
                        Q
                      </span>
                      취약점 점검은 어떻게 신청하나요?
                    </h3>
                    <p className="mt-2 pl-8 text-muted-foreground">
                      왼쪽 메뉴에서 '취약점 점검 신청'을 클릭한 후, '신규 신청'
                      버튼을 눌러 프로젝트 정보를 입력하면 됩니다. 자세한 내용은
                      초보자 가이드를 참고해주세요.
                    </p>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="flex items-center text-lg font-medium">
                      <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
                        Q
                      </span>
                      취약점 점검 결과는 어디서 확인할 수 있나요?
                    </h3>
                    <p className="mt-2 pl-8 text-muted-foreground">
                      왼쪽 메뉴에서 '취약점 점검 결과'를 클릭하면 확인할 수
                      있습니다. 전자금융기반시설 점검 결과와 보안성심의 취약점
                      점검 결과로 나뉘어 있습니다.
                    </p>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="flex items-center text-lg font-medium">
                      <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
                        Q
                      </span>
                      취약점 조치가 불가능한 경우 어떻게 해야 하나요?
                    </h3>
                    <p className="mt-2 pl-8 text-muted-foreground">
                      취약점 상세 페이지에서 '예외 요청' 버튼을 클릭하여 예외
                      신청을 할 수 있습니다. 타당한 사유가 있는 경우 보안팀 검토
                      후 승인됩니다.
                    </p>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="flex items-center text-lg font-medium">
                      <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
                        Q
                      </span>
                      취약점 심각도는 어떻게 분류되나요?
                    </h3>
                    <p className="mt-2 pl-8 text-muted-foreground">
                      취약점 심각도는 '상', '중', '하'로 분류됩니다. 심각도가
                      '상'인 취약점은 시스템에 큰 위험을 줄 수 있으므로 빠른
                      조치가 필요합니다.
                    </p>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="flex items-center text-lg font-medium">
                      <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
                        Q
                      </span>
                      비밀번호를 잊어버렸어요. 어떻게 해야 하나요?
                    </h3>
                    <p className="mt-2 pl-8 text-muted-foreground">
                      로그인 페이지에서 '비밀번호 찾기' 링크를 클릭하면
                      비밀번호를 재설정할 수 있습니다. 등록된 이메일로 재설정
                      링크가 발송됩니다.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
