/** @jsxImportSource @emotion/react */
import { useRef, useState } from 'react';
import { DropdownSubContext } from '../context';
import { dropdownItemStyle } from '../style';
import type { DropdownMenuItemProps } from '../types';
import { useKeyboardHandler } from '../hooks/useKeyboardHandler';

export const MenuItem = (props: DropdownMenuItemProps) => {
  const menuItemRef = useRef<HTMLLIElement>(null);
  const { children, onClick, sub, ...otherProps } = props;
  const disabled = props.disabled === undefined ? false : props.disabled;
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

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!menuItemRef.current) return;
    useKeyboardHandler({
      event,
      parentScope: '.menu',
      selectorOfList: '.menu_item:not([disabled])',
      setState: setSubOpen
    });
  };

  return (
    <DropdownSubContext.Provider value={{ subOpen, setSubOpen }}>
      <li
        {...otherProps}
        ref={menuItemRef}
        role="menuitem"
        tabIndex={0}
        className="menu_item"
        aria-disabled={disabled ? true : false}
        css={{ ...dropdownItemStyle(disabled) }}
        onMouseOver={onMouseOverHandle}
        onMouseLeave={onMouseLeaveHandle}
        // onFocus={onMouseOverHandle}
        // onBlur={onMouseLeaveHandle}
        onKeyDown={e => onKeyDown(e)}
      >
        {children}
      </li>
    </DropdownSubContext.Provider>
  );
};

MenuItem.displayName = 'Dropdown.MenuItem';
