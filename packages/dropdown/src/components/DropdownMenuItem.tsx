/** @jsxImportSource @emotion/react */
import { Flex } from '@jdesignlab/flex';
import { ChevronRight, Checkmark } from '@jdesignlab/react-icons';
import { useContext, useRef, useState } from 'react';
import { DropdownContext, DropdownSubContext } from '../context';
import { dropdownItemStyle } from '../style';
import type { DropdownMenuItemProps } from '../types';
import useArrowKeyDown from '../hooks/useArrowKeyDown';

export const MenuItem = (props: DropdownMenuItemProps) => {
  const menuItemRef = useRef<HTMLLIElement>(null);
  const { open } = useContext(DropdownContext);
  const { children, onClick, sub, ...otherProps } = props;
  const disabled = props.disabled === undefined ? false : props.disabled;
  const keyDownHandle = useArrowKeyDown();
  const [subOpen, setSubOpen] = useState<boolean>(false);

  const onMouseOverHandle = () => {
    if (sub && !subOpen && !disabled) {
      setSubOpen(true);
    }
  };

  const onMouseLeaveHandle = () => {
    if (sub && subOpen && !disabled) {
      setSubOpen(false);
    }
  };

  return (
    <DropdownSubContext.Provider value={{ subOpen, setSubOpen }}>
      <li
        {...otherProps}
        ref={menuItemRef}
        role="menuitem"
        tabIndex={open && !disabled ? 0 : -1}
        className="menu_item"
        aria-disabled={disabled ? true : false}
        css={{ ...dropdownItemStyle(disabled) }}
        onMouseOver={onMouseOverHandle}
        onMouseLeave={onMouseLeaveHandle}
        onKeyDown={e => {
          keyDownHandle(e, menuItemRef, setSubOpen);
        }}
      >
        {children}
      </li>
    </DropdownSubContext.Provider>
  );
};

MenuItem.displayName = 'Dropdown.MenuItem';