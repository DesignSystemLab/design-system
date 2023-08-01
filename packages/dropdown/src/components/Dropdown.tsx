/** @jsxImportSource @emotion/react */

import type { DropdownProps } from '../types';
import { dropdownWrapperStyle, dropdownOverlayStyle } from '../style';
import { useState, useRef, useMemo, useEffect, MouseEvent, MouseEventHandler } from 'react';
import { Divider } from './DropdownDivider';
import { Menu } from './DropdownMenu';
import { Trigger } from './DropdownTrigger';
import { MenuItem } from './DropdownMenuItem';
import { SubMenu } from './DropdownSubMenu';
import { SubMenuItem } from './DropdownSubMenuItem';
import { DropdownContext } from '../context';
import { useOutsideClick } from '@jdesignlab/react-utils';
import { useToggleOpen } from '../hooks/useToggleOpen';

export const Dropdown = (props: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [triggerWidth, setTriggerWidth] = useState<number>(0);
  const [triggerHeight, setTriggerHeight] = useState<number>(0);
  const { children, width = 200, placement = 'buttom', ...otherProps } = props;
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
        ? (dropdownRef.current.querySelector("[role='menu']") as HTMLElement)
        : null;
      if (dropdownMenu) {
        useToggleOpen(dropdownMenu);
      }
    }
  });
  return (
    <DropdownContext.Provider value={providerValue}>
      <div ref={dropdownRef} css={dropdownWrapperStyle} {...otherProps} className="menu_wrapper">
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
