/** @jsxImportSource @emotion/react */

import type { DropdownProps } from './types';
import { dropdownWrapperStyle, dropdownOverlayStyle } from './style';
import { useState, useRef } from 'react';
import { Divider } from './components/DropdownDivider';
import { Menu } from './components/DropdownMenu';
import { Trigger } from './components/DropdownTrigger';
import { MenuItem } from './components/DropdownMenuItem';
import { SubMenu } from './components/DropdownSubMenu';
import { SubMenuItem } from './components/DropdownSubMenuItem';
import { DropdownContext } from './context';

export const Dropdown = (props: DropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [triggerWidth, setTriggerWidth] = useState<number>(0);
  const [triggerHeight, setTriggerHeight] = useState<number>(0);
  const { children, ...otherProps } = props;
  const mode = props.mode === undefined ? 'click' : props.mode;
  const on = props.on === undefined ? 'bottom' : props.on;
  const gap = Number(props.gap) || 10;

  const providerValue = {
    open,
    setOpen,
    mode,
    on,
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
      {open && <div css={dropdownOverlayStyle} onClick={onClickOverlayHandle}></div>}
      <div css={dropdownWrapperStyle} {...otherProps}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.MenuItem = MenuItem;
Dropdown.SubMenu = SubMenu;
Dropdown.SubMenuItem = SubMenuItem;
Dropdown.Divider = Divider;
