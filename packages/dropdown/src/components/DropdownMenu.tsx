/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dropdownLocationStyle, dropdownMenuStyle } from '../style';
import React, { useState, useEffect, useContext, useRef, createContext, useCallback } from 'react';
import { DropdownContext } from '../context';
import type { DropdownMenuProps } from '../types';
import useCloseKeyDown from '../hooks/useCloseKeyDown';

export const Menu = (props: DropdownMenuProps) => {
  const { children, ...otherProps } = props;
  const { open, setOpen, lazy, triggerWidth, triggerHeight, gap, placement } = useContext(DropdownContext);
  const [menuStyle, setMenuStyle] = useState<ReturnType<typeof css>>();
  const keyDownHandle = useCloseKeyDown();
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setMenuStyle(
      css({ ...dropdownLocationStyle(menuRef, triggerWidth, triggerHeight, gap, placement) }, { ...dropdownMenuStyle })
    );
  }, [open]);

  const MenuBox = () => {
    return (
      <ul
        ref={menuRef}
        role="menu"
        className={`menu ${open ? 'menu_open' : 'menu_close'}`}
        // aria-haspopup="true"  // 서브메뉴 있는 경우
        aria-expanded={open} // 메뉴 확장됐을 경우
        aria-orientation="vertical" // 메뉴 방향
        onKeyDown={e => {
          keyDownHandle(e, menuRef, open, setOpen);
        }}
        css={menuStyle}
        {...otherProps}
      >
        {children}
      </ul>
    );
  };
  return <>{lazy ? open && <MenuBox /> : <MenuBox />}</>;
};

Menu.displayName = 'Dropdown.Menu';
