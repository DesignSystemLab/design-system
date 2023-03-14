/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dropdownSubLocationStyle, dropdownMenuStyle } from '../style';
import React, { useState, useEffect, useContext, useRef, createContext, useCallback } from 'react';
import { DropdownContext, DropdownSubContext } from '../context';
import type { DropdownSubMenuProps } from '../types';

export const SubMenu = (props: DropdownSubMenuProps) => {
  const { children, ...otherProps } = props;
  const { open } = useContext(DropdownContext);
  const { subOpen, setSubOpen } = useContext(DropdownSubContext);
  const [menuStyle, setMenuStyle] = useState<ReturnType<typeof css>>();
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setMenuStyle(css({ ...dropdownSubLocationStyle(menuRef) }, { ...dropdownMenuStyle }));
  }, [open]);

  return (
    <>
      {open && (
        <ul
          role="menu"
          ref={menuRef}
          aria-expanded={subOpen}
          aria-orientation="vertical"
          css={menuStyle}
          className={`subitem ${subOpen ? 'sub_open' : 'sub_close'}`}
          {...otherProps}
        >
          {children}
        </ul>
      )}
    </>
  );
};
