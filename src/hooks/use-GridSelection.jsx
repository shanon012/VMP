// use-GridSelection.jsx
import { useState, useCallback } from "react";
import { addRowBelow, deleteRow } from "../lib/agGridUtils";
import { CustomContextMenu } from "@/components/customContextMenu";

export const useGridSelection = (colDefs, gridRef) => {
  // ──────────────────────────────────────────
  // 1) 셀 범위 드래그/클릭 선택 관리
  const [range, setRange] = useState(null);
  const [dragging, setDragging] = useState(false);

  const onCellClicked = useCallback(
    (params) => {
      const { rowIndex, colDef, event } = params;
      const colIndex = colDefs.findIndex((c) => c.field === colDef.field);
      setDragging(false);

      if (event.shiftKey && range?.start) {
        setRange((prev) => ({ ...prev, end: { rowIndex, colIndex } }));
      } else {
        setRange({ start: { rowIndex, colIndex }, end: null });
      }
    },
    [colDefs, range]
  );

  const onCellMouseDown = useCallback(
    (params) => {
      const { rowIndex, colDef, event } = params;
      const colIndex = colDefs.findIndex((c) => c.field === colDef.field);
      setDragging(true);
      if (!event.shiftKey) {
        setRange({ start: { rowIndex, colIndex }, end: null });
      }
    },
    [colDefs]
  );

  const onCellMouseOver = useCallback(
    (params) => {
      if (!dragging || !range?.start) return;
      const { rowIndex, colDef } = params;
      const colIndex = colDefs.findIndex((c) => c.field === colDef.field);
      setRange((prev) => ({ ...prev, end: { rowIndex, colIndex } }));
    },
    [dragging, colDefs, range]
  );

  const getCellClassRules = useCallback(
    () => ({
      "range-selected": (params) => {
        if (!range?.start || !range?.end) return false;

        const row = params.rowIndex;
        const colIndex = colDefs.findIndex(
          (col) => col.field === params.colDef.field
        );

        const startRow = Math.min(range.start.rowIndex, range.end.rowIndex);
        const endRow = Math.max(range.start.rowIndex, range.end.rowIndex);
        const startCol = Math.min(range.start.colIndex, range.end.colIndex);
        const endCol = Math.max(range.start.colIndex, range.end.colIndex);

        return (
          row >= startRow &&
          row <= endRow &&
          colIndex >= startCol &&
          colIndex <= endCol
        );
      },
    }),
    [colDefs, range]
  );

  // ──────────────────────────────────────────
  // 2) 컨텍스트 메뉴 아이템 정의
  const getContextMenuItems = useCallback(
    (params) => [
      {
        name: "한 줄 추가",
        action: () => addRowBelow(gridRef, params, {}),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4 text-muted-foreground"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
        ), // Bootstrap icon 예시
      },
      {
        name: "한 줄 삭제",
        action: () => deleteRow(gridRef, params),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4 text-muted-foreground"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
          </svg>
        ),
        disabled: !params.node, // node가 없으면 비활성화
      },
    ],
    [gridRef]
  );

  // ──────────────────────────────────────────
  // 3) 내장 useContextMenu 로직
  const [ctxMenu, setCtxMenu] = useState({
    top: null,
    left: null,
    items: [],
  });

  const handleContextMenu = useCallback(
    (params) => {
      params.event.preventDefault();
      console.log(params.event);
      setCtxMenu({
        top: params.event.clientY,
        left: params.event.clientX,
        items: getContextMenuItems(params),
      });
    },
    [getContextMenuItems]
  );

  const closeContextMenu = useCallback(() => {
    setCtxMenu({ top: null, left: null, items: [] });
  }, []);

  const ContextMenuComponent = () =>
    ctxMenu.top !== null ? (
      <CustomContextMenu
        x={ctxMenu.left}
        y={ctxMenu.top}
        items={ctxMenu.items}
        onClose={closeContextMenu}
      />
    ) : null;

  return {
    range,
    dragging,
    setDragging,
    onCellClicked,
    onCellMouseDown,
    onCellMouseOver,
    getCellClassRules,
    handleContextMenu,
    ContextMenuComponent,
  };
};
