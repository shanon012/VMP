// agGridUtils.js (유틸 전용: 복사, 붙여넣기, Undo, 선택 복사/붙여넣기 래퍼)

let lastState = [];

// 전체 복사
export const handleCopyAll = (gridRef) => {
  if (!gridRef.current?.api) return;
  const rowData = [];
  gridRef.current.api.forEachNode((node) => {
    rowData.push(Object.values(node.data).join("\t"));
  });
  navigator.clipboard.writeText(rowData.join("\n"));
};

// 단일 셀 복사
export const handleCopyCell = (gridRef) => {
  const cell = gridRef.current.api.getFocusedCell();
  if (!cell) return;

  const { rowIndex, column } = cell;
  const colId = column.getColId();
  const rowNode = gridRef.current.api.getDisplayedRowAtIndex(rowIndex);
  const value = rowNode?.data?.[colId];

  if (value !== undefined) {
    navigator.clipboard.writeText(String(value));
  }
};

// 선택된 행 전체 복사
export const handleCopyRows = (gridRef, colDefs) => {
  if (!gridRef.current?.api) return;
  const selectedNodes = gridRef.current.api.getSelectedNodes();
  if (!selectedNodes.length) return;

  const fields = colDefs.map((col) => col.field);
  let copied = fields.join("\t") + "\n";
  selectedNodes.forEach((node) => {
    copied += fields.map((field) => node.data[field]).join("\t") + "\n";
  });

  navigator.clipboard.writeText(copied.trim());
};

// 범위 복사
export const handleCopyRange = (gridRef, colDefs, range) => {
  if (!gridRef.current?.api || !range?.start || !range?.end) return;

  const startRow = Math.min(range.start.rowIndex, range.end.rowIndex);
  const endRow = Math.max(range.start.rowIndex, range.end.rowIndex);
  const startCol = Math.min(range.start.colIndex, range.end.colIndex);
  const endCol = Math.max(range.start.colIndex, range.end.colIndex);
  const fields = colDefs.slice(startCol, endCol + 1).map((col) => col.field);

  let copied = "";
  for (let i = startRow; i <= endRow; i++) {
    const node = gridRef.current.api.getDisplayedRowAtIndex(i);
    copied += fields.map((field) => node.data[field]).join("\t") + "\n";
  }

  navigator.clipboard.writeText(copied.trim());
};

// 붙여넣기
export const handlePasteRows = async (gridRef, colDefs) => {
  if (!gridRef.current?.api) return;
  const text = await navigator.clipboard.readText();
  const rows = text
    .trim()
    .split("\n")
    .map((row) => row.split("\t"));

  const focus = gridRef.current.api.getFocusedCell();
  const startRow = focus?.rowIndex ?? 0;
  const startCol = colDefs.findIndex(
    (col) => col.field === focus?.column?.getColId()
  );

  lastState = [];
  rows.forEach((values, rOffset) => {
    const node = gridRef.current.api.getDisplayedRowAtIndex(startRow + rOffset);
    if (!node) return;

    // 이전 상태 저장
    lastState.push({ rowIndex: startRow + rOffset, oldData: { ...node.data } });

    values.forEach((val, cOffset) => {
      const col = colDefs[startCol + cOffset];
      if (!col) return;
      node.setDataValue(col.field, val);
    });
  });
};

// 붙여넣기 취소
export const undoPaste = (gridRef) => {
  if (!gridRef.current?.api || !lastState.length) return;
  lastState.forEach(({ rowIndex, oldData }) => {
    const node = gridRef.current.api.getDisplayedRowAtIndex(rowIndex);
    if (!node) return;

    Object.keys(oldData).forEach((field) => {
      node.setDataValue(field, oldData[field]);
    });
  });
  lastState = [];
};

// — 행 추가/삭제 유틸
export const addRowBelow = (gridRef, params, defaultData = {}) => {
  gridRef.current.api.applyTransaction({
    add: [defaultData],
    addIndex: params.node.rowIndex + 1,
  });
};

// - 행 삭제 유틸
export const deleteRow = (gridRef, params) => {
  gridRef.current.api.applyTransaction({
    remove: [params.node.data],
  });
};

// 사용자 편의를 위한 래퍼 함수: 셀/범위/행 복사 자동 분기
export const copySelection = (gridRef, colDefs, range) => {
  if (range?.start && range?.end) {
    handleCopyRange(gridRef, colDefs, range);
  } else if (range?.start) {
    handleCopyCell(gridRef);
  } else {
    handleCopyRows(gridRef, colDefs);
  }
};

// — wrapper: 붙여넣기
export const pasteSelection = (gridRef, colDefs) => {
  handlePasteRows(gridRef, colDefs);
};

// — wrapper: Undo
export const undoSelection = (gridRef) => {
  undoPaste(gridRef);
};
