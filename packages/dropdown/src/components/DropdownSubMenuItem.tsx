/** @jsxImportSource @emotion/react */
import { Flex } from '@jdesignlab/flex';
import { ChevronRight, Checkmark } from '@jdesignlab/react-icons';
import { useContext, useRef, useState } from 'react';
import { DropdownContext, DropdownSubContext } from '../context';
import { dropdownItemStyle } from '../style';
import type { DropdownSubMenuItemProps } from '../types';
import useArrowKeyHandle from '../hooks/useArrowKeyDown';

export const SubMenuItem = (props: DropdownSubMenuItemProps) => {
  const menuItemRef = useRef<HTMLLIElement>(null);
  const { open } = useContext(DropdownContext);
  const { children, onClick, ...otherProps } = props;
  const disabled = props.disabled === undefined ? false : props.disabled;
  const keyDownHandle = useArrowKeyHandle();

  return (
    <li
      {...otherProps}
      ref={menuItemRef}
      role="menuitem"
      tabIndex={open && !disabled ? 0 : -1}
      className={`sub_item ${disabled ? 'disabled' : ''}`}
      aria-disabled={disabled ? true : false}
      css={{ ...dropdownItemStyle(disabled) }}
      onKeyDown={e => {
        keyDownHandle(e, menuItemRef);
      }}
    >
      {children}
    </li>
  );
};

SubMenuItem.displayName = 'Dropdown.SubMenuItem';
