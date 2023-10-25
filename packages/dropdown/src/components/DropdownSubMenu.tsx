/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect, useContext, useRef } from 'react';
import * as Style from '../style';
import { DropdownContext, DropdownSubContext } from '../context';
import type { DropdownSubMenuProps } from '../types';

export const SubMenu = (props: DropdownSubMenuProps) => {
  const { children, ...restProps } = props;
  const { width } = useContext(DropdownContext);
  const { subOpen } = useContext(DropdownSubContext);
  const [menuStyle, setMenuStyle] = useState<ReturnType<typeof css>>();
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setMenuStyle(css({ ...Style.createDropdownSubLocation(menuRef, width) }, { ...Style.dropdownMenu }));
  }, [width]);

  return (
    <ul
      role="menu"
      ref={menuRef}
      aria-orientation="vertical"
      css={menuStyle}
      className={`${subOpen ? 'sub_open' : 'sub_close'}`}
      {...restProps}
    >
      {children}
    </ul>
  );
};

SubMenu.displayName = 'Dropdown.SubMenu';
