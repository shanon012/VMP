import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

/**
 * items: [{ name: string, action: ()=>void, disabled?: boolean, icon?: JSX }]
 * x, y: 화면 좌표
 * onClose: 메뉴 닫기 콜백
 */
export function CustomContextMenu({ items, x, y, onClose }) {
  const menuRef = useRef(null);

  // 메뉴 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      // 1) 메뉴 DOM 안에서 발생한 클릭이면 무시
      if (menuRef.current && menuRef.current.contains(e.target)) {
        return;
      }
      // 2) 메뉴 외부 클릭이면 닫기
      onClose();
    };

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  // 포탈을 위한 container
  const menu = (
    <ul
      ref={menuRef}
      className="custom-context-menu"
      style={{ top: y, left: x }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {items.map((item, i) => (
        <li
          key={i}
          className={item.disabled ? "disabled" : ""}
          onClick={() => {
            if (!item.disabled) {
              item.action();
              onClose();
            }
          }}
        >
          {item.icon && <span className="icon">{item.icon}</span>}
          <span className="label">{item.name}</span>
        </li>
      ))}
    </ul>
  );

  return ReactDOM.createPortal(menu, document.body);
}
