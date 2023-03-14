/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dropdownLocationStyle, dropdownMenuStyle } from '../style';
import React, { useState, useEffect, useContext, useRef, createContext, useCallback } from 'react';
import { DropdownContext } from '../context';
import type { DropdownMenuProps } from '../types';

export const Menu = (props: DropdownMenuProps) => {
  const { children, ...otherProps } = props;
  const { open, setOpen, mode, triggerWidth, triggerHeight, gap, on } = useContext(DropdownContext);
  const [menuStyle, setMenuStyle] = useState<ReturnType<typeof css>>();
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setMenuStyle(
      css({ ...dropdownLocationStyle(menuRef, triggerWidth, triggerHeight, gap, on) }, { ...dropdownMenuStyle })
    );
  }, [open]);

  const onClickHandle = () => {
    mode === 'click' && setOpen(!open);
  };

  const onMouseoverHandle = () => {
    mode === 'hover' && setOpen(!open);
  };

  return (
    <>
      {open && (
        <ul
          ref={menuRef}
          role="menu"
          className="menu"
          // aria-haspopup="true"  // 서브메뉴 있는 경우
          aria-expanded={open} // 메뉴 확장됐을 경우
          aria-orientation="vertical" // 메뉴 방향
          onMouseOver={onMouseoverHandle}
          onMouseLeave={onMouseoverHandle}
          css={menuStyle}
          {...otherProps}
        >
          {children}
        </ul>
      )}
    </>
  );
};
