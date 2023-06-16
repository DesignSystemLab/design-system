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

export const Dropdown = (props: DropdownProps) => {
  const [triggerWidth, setTriggerWidth] = useState<number>(0);
  const [triggerHeight, setTriggerHeight] = useState<number>(0);
  const { children, width = 200, ...otherProps } = props;
  const placement = props.placement === undefined ? 'bottom' : props.placement;
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

  return (
    <DropdownContext.Provider value={providerValue}>
      <div css={dropdownWrapperStyle} {...otherProps} className="menu_wrapper">
        {/* <div css={dropdownOverlayStyle} className="menu_overlay" onClick={e => useToggleOpen(e.currentTarget)}></div> */}
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
