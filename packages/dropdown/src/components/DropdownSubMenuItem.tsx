/** @jsxImportSource @emotion/react */
import { useContext, useRef, useState } from 'react';
import { dropdownItemStyle } from '../style';
import type { DropdownSubMenuItemProps } from '../types';
import { useKeyboardHandler } from '../hooks/useKeyboardHandler';

export const SubMenuItem = (props: DropdownSubMenuItemProps) => {
  const menuItemRef = useRef<HTMLLIElement>(null);
  const { children, onClick, ...otherProps } = props;
  const disabled = props.disabled === undefined ? false : props.disabled;

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!menuItemRef.current) return;
    useKeyboardHandler({
      event,
      parentScope: '.menu_item',
      selectorOfList: '.sub_item:not([disabled])'
    });
  };

  return (
    <li
      {...otherProps}
      ref={menuItemRef}
      role="menuitem"
      tabIndex={0}
      className={`sub_item ${disabled ? 'disabled' : ''}`}
      aria-disabled={disabled ? true : false}
      css={{ ...dropdownItemStyle(disabled) }}
      onKeyDown={e => onKeyDown(e)}
    >
      {children}
    </li>
  );
};

SubMenuItem.displayName = 'Dropdown.SubMenuItem';
