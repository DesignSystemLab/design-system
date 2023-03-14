/** @jsxImportSource @emotion/react */
import { Flex } from '@jdesignlab/flex';
import { ChevronRight, Checkmark } from '@jdesignlab/react-icons';
import { useContext, useRef, useState } from 'react';
import { DropdownContext, DropdownSubContext } from '../context';
import { dropdownItemStyle } from '../style';
import type { DropdownSubMenuItemProps } from '../types';
import useDropdownKeyDownHandle from '../hooks/useKeyDownHandle';

export const SubMenuItem = (props: DropdownSubMenuItemProps) => {
  const menuItemRef = useRef<HTMLLIElement>(null);
  const { open } = useContext(DropdownContext);
  const { children, onClick, sub, ...otherProps } = props;
  const disabled = props.disabled === undefined ? false : props.disabled;
  const keyDownHandle = useDropdownKeyDownHandle();

  return (
    <li
      {...otherProps}
      ref={menuItemRef}
      role="menuitem"
      tabIndex={open && !disabled ? 0 : -1}
      className={`sub_item ${disabled ? 'disabled' : ''}`}
      css={{ ...dropdownItemStyle(disabled) }}
      onKeyDown={e => {
        keyDownHandle(e, menuItemRef);
      }}
    >
      {children}
    </li>
  );
};
