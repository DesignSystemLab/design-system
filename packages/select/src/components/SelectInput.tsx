/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useRef } from 'react';
import { SelectContext } from '../hooks/SelectContext';
import { createComboboxStyle } from '../styles/createComboboxStyle';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';
import { useSearchOptions } from '../hooks/useSearchOptions';

export const SelectInput = () => {
  const { setOpen, searchKeyword, selectProps } = useContext(SelectContext);
  const comboboxInputRef = useRef<HTMLInputElement>(null);
  const { comboboxStyle } = createComboboxStyle(selectProps);
  const { handleInput, handleInputEnter } = useSearchOptions();
  const { handleInputKeydown } = useKeyboardNavigation();

  useEffect(() => {
    if (comboboxInputRef.current) {
      comboboxInputRef.current.focus();
    }
  }, [comboboxInputRef]);

  return (
    <input
      disabled={selectProps.disabled}
      role="searchbox"
      ref={comboboxInputRef}
      css={comboboxStyle}
      type="text"
      placeholder={selectProps.placeholder || 'Search Options..'}
      onInput={handleInput}
      onKeyDown={e => {
        switch (e.key) {
          case 'Enter':
            handleInputEnter(e);
            setOpen(false);
            return;
          case 'Escape':
            setOpen(false);
            return;
          default:
            handleInputKeydown(e);
            return;
        }
      }}
      value={searchKeyword}
    />
  );
};
