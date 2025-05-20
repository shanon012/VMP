import { useState, useCallback } from "react";
import { CustomContextMenu } from "@/components/CustomContextMenu";

/**
 * getItems: (params) => Array<{
 *   name: string,
 *   action: ()=>void,
 *   disabled?: boolean,
 *   icon?: JSX
 * }>
 */
export function useContextMenu(getItems) {
  const [menu, setMenu] = useState({ top: null, left: null, items: [] });

  // Ag Grid onCellContextMenu 에 바인딩할 핸들러
  const handleContextMenu = useCallback(
    (params) => (event) => {
      event.preventDefault();
      const items = getItems(params);
      setMenu({
        top: event.clientY,
        left: event.clientX,
        items,
      });
    },
    [getItems]
  );

  // 메뉴 닫기
  const closeMenu = useCallback(() => {
    setMenu({ top: null, left: null, items: [] });
  }, []);

  // 렌더러 컴포넌트
  const ContextMenuComponent = () =>
    menu.top !== null ? (
      <CustomContextMenu
        x={menu.left}
        y={menu.top}
        items={menu.items}
        onClose={closeMenu}
      />
    ) : null;

  return { handleContextMenu, ContextMenuComponent };
}
