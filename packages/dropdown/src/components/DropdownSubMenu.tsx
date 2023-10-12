/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect, useContext, useRef, createContext, useCallback } from 'react';
import { dropdownSubLocationStyle, dropdownMenuStyle } from '../style';
import { DropdownContext, DropdownSubContext } from '../context';
import type { DropdownSubMenuProps } from '../types';

export const SubMenu = (props: DropdownSubMenuProps) => {
  const { children, ...otherProps } = props;
  const { width } = useContext(DropdownContext);
  const { subOpen } = useContext(DropdownSubContext);
  const [menuStyle, setMenuStyle] = useState<ReturnType<typeof css>>();
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setMenuStyle(css({ ...dropdownSubLocationStyle(menuRef, width) }, { ...dropdownMenuStyle }));
  }, [open]);

  return (
    <ul
      role="menu"
      ref={menuRef}
      aria-expanded={subOpen}
      aria-orientation="vertical"
      css={menuStyle}
      className={`${subOpen ? 'sub_open' : 'sub_close'}`}
      {...otherProps}
    >
      {children}
    </ul>
  );
};

SubMenu.displayName = 'Dropdown.SubMenu';
