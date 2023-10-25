/** @jsxImportSource @emotion/react */

import { useState, useRef, useMemo } from 'react';
import { useOutsideClick } from '@jdesignlab/react-utils';
import { Divider } from './DropdownDivider';
import { Menu } from './DropdownMenu';
import { DropdownTrigger } from './DropdownTrigger';
import { MenuItem } from './DropdownMenuItem';
import { SubMenu } from './DropdownSubMenu';
import { SubMenuItem } from './DropdownSubMenuItem';
import * as Style from '../style';
import { DropdownContext } from '../context';
import { toggleOpen } from '../utils/toggleOpen';
import { DROPDOWN_ROLE_QUERY, DROPDOWN_MENU_OPEN_CLASS_NAME } from '../constants';
import type { DropdownProps } from '../types';

export const Dropdown = (props: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [triggerWidth, setTriggerWidth] = useState<number>(0);
  const [triggerHeight, setTriggerHeight] = useState<number>(0);
  const { children, width = 200, placement = 'bottom', gap: gapProp, ...restProps } = props;
  const gap = Number(gapProp) || 0;
  const providerValue = useMemo(
    () => ({
      placement,
      width,
      triggerWidth,
      setTriggerWidth,
      triggerHeight,
      setTriggerHeight,
      gap
    }),
    [gap, placement, triggerHeight, triggerWidth, width]
  );

  useOutsideClick({
    ref: dropdownRef,
    handler: () => {
      const dropdownMenu = dropdownRef.current
        ? (dropdownRef.current.querySelector(DROPDOWN_ROLE_QUERY) as HTMLElement)
        : null;
      if (dropdownMenu && dropdownMenu.classList.contains(DROPDOWN_MENU_OPEN_CLASS_NAME)) {
        toggleOpen(dropdownMenu);
      }
    }
  });
  return (
    <DropdownContext.Provider value={providerValue}>
      <div ref={dropdownRef} css={Style.dropdownWrapper} {...restProps} className="menu_wrapper">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.displayName = 'Dropdown';

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = Menu;
Dropdown.MenuItem = MenuItem;
Dropdown.SubMenu = SubMenu;
Dropdown.SubMenuItem = SubMenuItem;
Dropdown.Divider = Divider;
