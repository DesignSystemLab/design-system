/** @jsxImportSource @emotion/react */

import type { DropdownProps } from '../types';
import { dropdownWrapperStyle } from '../style';
import { useState, useRef } from 'react';
import { Divider } from './DropdownDivider';
import { Menu } from './DropdownMenu';
import { Trigger } from './DropdownTrigger';
import { MenuItem } from './DropdownMenuItem';
import { SubMenu } from './DropdownSubMenu';
import { SubMenuItem } from './DropdownSubMenuItem';
import { DropdownContext } from '../context';
import { useOutsideClick } from '@jdesignlab/react-utils';
import { useToggleOpen } from '../hooks/useToggleOpen';
import { DROPDOWN_ROLE_QUERY, DROPDOWN_MENU_OPEN_CLASS_NAME } from '../constants';

export const Dropdown = (props: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [triggerWidth, setTriggerWidth] = useState<number>(0);
  const [triggerHeight, setTriggerHeight] = useState<number>(0);
  const { children, width = 200, placement = 'bottom', ...restProps } = props;
  const gap = Number(props.gap) || 0;
  const providerValue = {
    placement,
    width,
    triggerWidth,
    setTriggerWidth,
    triggerHeight,
    setTriggerHeight,
    gap
  };
  useOutsideClick({
    ref: dropdownRef,
    handler: () => {
      const dropdownMenu = dropdownRef.current
        ? (dropdownRef.current.querySelector(DROPDOWN_ROLE_QUERY) as HTMLElement)
        : null;
      if (dropdownMenu && dropdownMenu.classList.contains(DROPDOWN_MENU_OPEN_CLASS_NAME)) {
        useToggleOpen(dropdownMenu);
      }
    }
  });
  return (
    <DropdownContext.Provider value={providerValue}>
      <div ref={dropdownRef} css={dropdownWrapperStyle} {...restProps} className="menu_wrapper">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.displayName = 'Dropdown';

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.MenuItem = MenuItem;
Dropdown.SubMenu = SubMenu;
Dropdown.SubMenuItem = SubMenuItem;
Dropdown.Divider = Divider;
