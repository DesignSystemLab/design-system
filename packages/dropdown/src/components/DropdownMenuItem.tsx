/** @jsxImportSource @emotion/react */

import { useContext, useRef } from 'react';
import { DropdownContext } from '../context';
import { dropdownItemStyle } from '../style';
import type { DropdownMenuItemProps } from '../types';
import useDropdownKeyDownHandle from '../hooks/useKeyDownHandle';

export const MenuItem = (props: DropdownMenuItemProps) => {
  const menuItemRef = useRef<HTMLLIElement>(null);
  const { open } = useContext(DropdownContext);
  const { children, onClick, ...otherProps } = props;
  const disabled = props.disabled === undefined ? false : props.disabled;
  const keyDownHandle = useDropdownKeyDownHandle();

  return (
    <li
      {...otherProps}
      ref={menuItemRef}
      role="menuitem"
      tabIndex={open && !disabled ? 0 : -1}
      className={disabled ? 'disabled' : ''}
      css={{ ...dropdownItemStyle(disabled) }}
      onKeyDown={e => {
        keyDownHandle(e, menuItemRef, onClick);
      }}
    >
      {children}
    </li>
  );
};
