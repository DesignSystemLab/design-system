/** @jsxImportSource @emotion/react */

import type { DropdownProps } from '../types';
import { dropdownWrapperStyle, dropdownOverlayStyle } from '../style';
import { useState, useRef } from 'react';
import { Divider } from './DropdownDivider';
import { Menu } from './DropdownMenu';
import { Trigger } from './DropdownTrigger';
import { MenuItem } from './DropdownMenuItem';
import { SubMenu } from './DropdownSubMenu';
import { SubMenuItem } from './DropdownSubMenuItem';
import { DropdownContext } from '../context';

export const Dropdown = (props: DropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [triggerWidth, setTriggerWidth] = useState<number>(0);
  const [triggerHeight, setTriggerHeight] = useState<number>(0);
  const { children, lazy, ...otherProps } = props;
  const placement = props.placement === undefined ? 'bottom' : props.placement;
  const gap = Number(props.gap) || 0;

  const providerValue = {
    open,
    setOpen,
    placement,
    lazy: lazy || false,
    triggerWidth,
    setTriggerWidth,
    triggerHeight,
    setTriggerHeight,
    gap
  };

  const onClickOverlayHandle = () => {
    setOpen(false);
  };

  return (
    <DropdownContext.Provider value={providerValue}>
      {open && <div css={dropdownOverlayStyle} className="menu_overlay" onClick={onClickOverlayHandle}></div>}
      <div css={dropdownWrapperStyle} {...otherProps} className="menu_wrapper">
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
