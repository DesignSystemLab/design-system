/** @jsxImportSource @emotion/react */
import { dropdownLocationStyle } from '../style';
import React, { useContext, useRef } from 'react';
import { DropdownContext } from '../context';
import type { DropdownMenuProps } from '../types';
import useCloseKeyDown from '../hooks/useCloseKeyDown';

export const Menu = React.memo((props: DropdownMenuProps) => {
  const { children, ...otherProps } = props;
  const { width, triggerWidth, triggerHeight, gap, placement } = useContext(DropdownContext);
  const keyDownHandle = useCloseKeyDown();
  const menuRef = useRef<HTMLUListElement>(null);

  const MenuBox = () => {
    return (
      <ul
        ref={menuRef}
        role="menu"
        className={`menu menu_close`}
        // aria-haspopup="true"  // 서브메뉴 있는 경우
        // aria-expanded={open} // 메뉴 확장됐을 경우
        aria-orientation="vertical" // 메뉴 방향
        onKeyDown={e => {
          keyDownHandle(e);
        }}
        css={dropdownLocationStyle(menuRef, width, triggerWidth, triggerHeight, gap, placement)}
        {...otherProps}
      >
        {children}
      </ul>
    );
  };
  return <>{<MenuBox />}</>;
});

Menu.displayName = 'Dropdown.Menu';
