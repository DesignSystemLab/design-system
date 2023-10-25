/** @jsxImportSource @emotion/react */

import React, { useContext, useRef } from 'react';
import * as Style from '../style';

import { DropdownContext } from '../context';
import closeKeyDown from '../utils/closeKeyDown';
import type { DropdownMenuProps } from '../types';

export const Menu = React.memo((props: DropdownMenuProps) => {
  const { children, ...otherProps } = props;
  const { width, triggerWidth, triggerHeight, gap, placement } = useContext(DropdownContext);
  const menuRef = useRef<HTMLUListElement>(null);

  return (
    <ul
      ref={menuRef}
      role="menu"
      className="menu menu_close"
      // aria-haspopup="true"  // 서브메뉴 있는 경우
      // aria-expanded={open} // 메뉴 확장됐을 경우
      aria-orientation="vertical" // 메뉴 방향
      onKeyDown={e => closeKeyDown(e)}
      css={Style.createLocation(menuRef, width, triggerWidth, triggerHeight, gap, placement)}
      {...otherProps}
    >
      {children}
    </ul>
  );
});

Menu.displayName = 'DropdownMenu';
