/** @jsxImportSource @emotion/react */
import { useMemo, useRef, useState } from 'react';
import { DropdownSubContext } from '../context';
import * as Style from '../style';
import { NOT_DISABLED_DROPDOWN_MENU_QUERY } from '../constants';
import { selectItem } from '../utils/selectItem';
import { keyboardHandler } from '../utils/keyboardHandler';
import type { DropdownMenuItemProps } from '../types';

export const MenuItem = (props: DropdownMenuItemProps) => {
  const menuItemRef = useRef<HTMLLIElement>(null);
  const { children, hasSub, onClick, disabled, ...restProps } = props;
  const [subOpen, setSubOpen] = useState<boolean>(false);

  const toggleSubOpen = () => {
    if (hasSub && !disabled) {
      setSubOpen(prev => !prev);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!menuItemRef.current) return;
    if (event.key !== 'Tab') {
      setSubOpen(false);
    }
    keyboardHandler({
      event,
      parentScope: '.menu',
      selectorOfList: NOT_DISABLED_DROPDOWN_MENU_QUERY,
      setState: setSubOpen,
      onClick
    });
  };

  const providerValue = useMemo(() => ({ subOpen, setSubOpen }), [subOpen]);

  return (
    <DropdownSubContext.Provider value={providerValue}>
      <li
        ref={menuItemRef}
        role="menuitem"
        tabIndex={disabled ? -1 : 0}
        className="menu_item"
        aria-disabled={!!disabled}
        css={{ ...Style.createDropdownItem(!!disabled) }}
        onMouseOver={toggleSubOpen}
        onMouseLeave={toggleSubOpen}
        onKeyDown={e => onKeyDown(e)}
        onClick={e => selectItem(e, onClick)}
        onFocus={toggleSubOpen}
        {...restProps}
      >
        {children}
      </li>
    </DropdownSubContext.Provider>
  );
};

MenuItem.displayName = 'DropdownMenuItem';
