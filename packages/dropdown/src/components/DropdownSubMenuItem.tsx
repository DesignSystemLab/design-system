/** @jsxImportSource @emotion/react */
import { useRef } from 'react';
import * as Style from '../style';
import { DROPDOWN_MENU_OPEN_CLASS_NAME, NOT_DISABLED_DROPDOWN_SUB_ITEM_QUERY } from '../constants';
import { keyboardHandler } from '../utils/keyboardHandler';
import { selectItem } from '../utils/selectItem';
import type { DropdownSubMenuItemProps } from '../types';

export const SubMenuItem = (props: DropdownSubMenuItemProps) => {
  const menuItemRef = useRef<HTMLLIElement>(null);
  const { children, onClick, disabled, ...otherProps } = props;

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!menuItemRef.current) return;

    keyboardHandler({
      event,
      parentScope: DROPDOWN_MENU_OPEN_CLASS_NAME,
      selectorOfList: NOT_DISABLED_DROPDOWN_SUB_ITEM_QUERY
    });
  };

  return (
    <li
      ref={menuItemRef}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      className={`sub_item ${disabled ? 'disabled' : ''}`}
      onClick={e => selectItem(e, onClick)}
      aria-disabled={!!disabled}
      css={{ ...Style.createDropdownItem(!!disabled) }}
      onKeyDown={e => onKeyDown(e)}
      {...otherProps}
    >
      {children}
    </li>
  );
};

SubMenuItem.displayName = 'Dropdown.SubMenuItem';
