"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeBalham,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import {
  handleCopyAll,
  copySelection,
  pasteSelection,
  undoSelection,
} from "../lib/agGridUtils";
import { useGridSelection } from "@/hooks/use-GridSelection";
import { actionButton } from "../components/actionButton";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function Assets() {
  const gridRef = useRef(null);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "id" },
    { field: "name" },
    { field: "type" },
    { field: "ip" },
    { field: "os" },
    { field: "department" },
    { field: "status" },
    { field: "lastScan" },
    { field: "action", headerName: "작업", cellRenderer: actionButton },
  ]);

  const [rowData, setRowData] = useState([
    {
      id: "AS-001",
      name: "웹 서버",
      type: "서버",
      ip: "192.168.1.10",
      os: "Ubuntu 20.04",
      department: "IT 인프라팀",
      status: "운영 중",
      lastScan: "2023-06-15",
    },
    {
      id: "AS-002",
      name: "데이터베이스 서버",
      type: "서버",
      ip: "192.168.1.20",
      os: "CentOS 8",
      department: "데이터 관리팀",
      status: "운영 중",
      lastScan: "2023-06-10",
    },
    {
      id: "AS-003",
      name: "방화벽",
      type: "네트워크",
      ip: "192.168.1.1",
      os: "FortiOS",
      department: "보안팀",
      status: "운영 중",
      lastScan: "2023-05-28",
    },
    {
      id: "AS-004",
      name: "개발 서버",
      type: "서버",
      ip: "192.168.2.10",
      os: "Windows Server 2019",
      department: "개발팀",
      status: "유지보수",
      lastScan: "2023-05-20",
    },
    {
      id: "AS-005",
      name: "백업 서버",
      type: "서버",
      ip: "192.168.2.20",
      os: "Ubuntu 18.04",
      department: "IT 인프라팀",
      status: "운영 중",
      lastScan: "2023-05-15",
    },
  ]);

  const rowSelection = useMemo(() => {
    return {
      mode: "multiRow",
      checkboxes: true,
      headerCheckbox: true,
      enableMultiSelectWithClick: true,
      enableSelectionWithoutKeys: true,
      enableClickSelection: true,
    };
  }, []);

  // const [range, setRange] = useState(null);
  // const [dragging, setDragging] = useState(false);

  const {
    range,
    setDragging,
    onCellClicked,
    onCellMouseDown,
    onCellMouseOver,
    getCellClassRules,
    handleContextMenu,
    ContextMenuComponent,
  } = useGridSelection(colDefs, gridRef);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      editable: true,
      cellClassRules: getCellClassRules(),
    };
  }, [range, colDefs]);

  // useEffect(() => {
  //   fetch("https://www.ag-grid.com/example-assets/space-mission-data.json") // Fetch data from server
  //     .then((result) => result.json()) // Convert to JSON
  //     .then((rowData) => setRowData(rowData)); // Update state of `rowData`
  // }, []);

  useEffect(() => {
    const keyHandler = (e) => {
      // 복사 (셀/범위/행 자동 분기)
      if (e.ctrlKey && e.key === "c") {
        e.preventDefault();
        copySelection(gridRef, colDefs, range);
      }
      // 붙여넣기
      if (e.ctrlKey && e.key === "v") {
        const editing = gridRef.current.api.getEditingCells();
        if (editing.length) return; // 셀 편집 중엔 브라우저 기본 붙여넣기
        e.preventDefault();
        pasteSelection(gridRef, colDefs);
      }
      // 실행 취소 (Undo)
      if (e.ctrlKey && e.key === "z") {
        e.preventDefault();
        undoSelection(gridRef);
      }
    };

    const handleMouseUp = () => setDragging(false);

    window.addEventListener("keydown", keyHandler);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("keydown", keyHandler);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [range, colDefs]);

  const getStatusBadge = (status) => {
    switch (status) {
      case "운영 중":
        return <Badge variant="success">운영 중</Badge>;
      case "유지보수":
        return <Badge variant="warning">유지보수</Badge>;
      case "폐기 예정":
        return <Badge variant="destructive">폐기 예정</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">자산 관리</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>새 자산 등록</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>새 자산 등록</DialogTitle>
              <DialogDescription>
                새로운 자산 정보를 입력하세요. 모든 필드는 필수입니다.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  자산명
                </Label>
                <Input id="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="type" className="text-right">
                  유형
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="유형 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="server">서버</SelectItem>
                    <SelectItem value="network">네트워크</SelectItem>
                    <SelectItem value="application">애플리케이션</SelectItem>
                    <SelectItem value="other">기타</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="ip" className="text-right">
                  IP 주소
                </Label>
                <Input id="ip" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="os" className="text-right">
                  OS/버전
                </Label>
                <Input id="os" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="department" className="text-right">
                  담당 부서
                </Label>
                <Input id="department" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  상태
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="상태 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">운영 중</SelectItem>
                    <SelectItem value="maintenance">유지보수</SelectItem>
                    <SelectItem value="deprecated">폐기 예정</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">등록</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="tabs-list">
          <TabsTrigger value="all" className="tabs-trigger">
            모든 자산
          </TabsTrigger>
          <TabsTrigger value="server" className="tabs-trigger">
            서버
          </TabsTrigger>
          <TabsTrigger value="network" className="tabs-trigger">
            네트워크
          </TabsTrigger>
          <TabsTrigger value="application" className="tabs-trigger">
            애플리케이션
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="tabs-content space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>모든 자산 목록</CardTitle>
              <CardDescription>
                시스템에 등록된 모든 자산 목록입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                style={{ width: "100%", height: "100%" }}
                onContextMenu={(e) => e.preventDefault()}
              >
                <AgGridReact
                  ref={gridRef}
                  theme={themeBalham}
                  rowData={rowData}
                  columnDefs={colDefs}
                  domLayout="autoHeight"
                  pagination={true}
                  defaultColDef={defaultColDef}
                  rowSelection={rowSelection}
                  onCellClicked={onCellClicked} // Shift+클릭 방식 유지
                  onCellMouseDown={onCellMouseDown} // 드래그 시작
                  onCellMouseOver={onCellMouseOver} // 드래그 중
                  onCellContextMenu={handleContextMenu}
                  suppressContextMenu={true}
                />
                <ContextMenuComponent />
              </div>
            </CardContent>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCopyAll(gridRef)}
            >
              전체 복사
            </Button>
          </Card>
        </TabsContent>
        <TabsContent value="server" className="tabs-content space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>서버 자산 목록</CardTitle>
              <CardDescription>서버 유형의 자산 목록입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-screen">
                <AgGridReact
                  theme={themeBalham}
                  rowData={rowData.filter((asset) => asset.type === "서버")}
                  columnDefs={colDefs}
                  defaultColDef={defaultColDef}
                />
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  상세보기
                </Button>
                <Button variant="outline" size="sm">
                  수정
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="network" className="tabs-content space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>네트워크 자산 목록</CardTitle>
              <CardDescription>
                네트워크 유형의 자산 목록입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-screen">
                <AgGridReact
                  theme={themeBalham}
                  rowData={rowData.filter((asset) => asset.type === "네트워크")}
                  columnDefs={colDefs}
                  defaultColDef={defaultColDef}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
