/** @jsxImportSource @emotion/react */
import { useRef, useState } from 'react';
import { DropdownSubContext } from '../context';
import { dropdownItemStyle } from '../style';
import { useKeyboardHandler } from '../hooks/useKeyboardHandler';
import { useSelectItem } from '../hooks/useSelectItem';
import { NOT_DISABLED_DROPDOWN_MENU_QUERY } from '../constants';
import type { DropdownMenuItemProps } from '../types';

export const MenuItem = (props: DropdownMenuItemProps) => {
  const menuItemRef = useRef<HTMLLIElement>(null);
  const { children, hasSub, onClick, ...otherProps } = props;
  const disabled = props.disabled === undefined ? false : props.disabled;
  const [subOpen, setSubOpen] = useState<boolean>(false);

  const toggleSubOpen = () => {
    if (hasSub && !disabled) {
      setSubOpen(prev => !prev);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!menuItemRef.current) return;
    if (event.key !== 'Tab') {
      subOpen && setSubOpen(false);
    }
    useKeyboardHandler({
      event,
      parentScope: '.menu',
      selectorOfList: NOT_DISABLED_DROPDOWN_MENU_QUERY,
      setState: setSubOpen,
      onClick
    });
  };

  return (
    <DropdownSubContext.Provider value={{ subOpen, setSubOpen }}>
      <li
        ref={menuItemRef}
        role="menuitem"
        tabIndex={disabled ? -1 : 0}
        className="menu_item"
        aria-disabled={!!disabled}
        css={{ ...dropdownItemStyle(disabled) }}
        onMouseOver={toggleSubOpen}
        onMouseLeave={toggleSubOpen}
        onClick={e => useSelectItem(e, onClick)}
        onKeyDown={e => onKeyDown(e)}
        {...otherProps}
      >
        {children}
      </li>
    </DropdownSubContext.Provider>
  );
};

MenuItem.displayName = 'Dropdown.MenuItem';
