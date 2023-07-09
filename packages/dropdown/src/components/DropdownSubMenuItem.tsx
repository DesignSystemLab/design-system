/** @jsxImportSource @emotion/react */
import { useContext, useRef, useState } from 'react';
import { dropdownItemStyle } from '../style';
import type { DropdownSubMenuItemProps } from '../types';
import { useKeyboardHandler } from '../hooks/useKeyboardHandler';
import { useSelectItem } from '../hooks/useSelectItem';

export const SubMenuItem = (props: DropdownSubMenuItemProps) => {
  const menuItemRef = useRef<HTMLLIElement>(null);
  const { children, onClick, value, ...otherProps } = props;
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
      ref={menuItemRef}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      className={`sub_item ${disabled ? 'disabled' : ''}`}
      onClick={e => useSelectItem(e, onClick)}
      aria-disabled={disabled ? true : false}
      css={{ ...dropdownItemStyle(disabled) }}
      onKeyDown={e => onKeyDown(e)}
      {...otherProps}
    >
      {children}
    </li>
  );
};

SubMenuItem.displayName = 'Dropdown.SubMenuItem';
