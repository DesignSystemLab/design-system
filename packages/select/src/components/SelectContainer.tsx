/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useRef, useState } from 'react';
import { SelectContext } from '../hooks/SelectContext';
import { createSelectStyle } from '../styles/createSelectStyle';
import { ComboboxOption } from './ComboboxOption';
import { SelectNotfound } from './SearchNotfound';
import { ContainerProps } from '../types';

export const SelectContainer = (props: ContainerProps) => {
  const { selectProps, open, setSelectRef, searchValues, searchKeyword } = useContext(SelectContext);
  const { Trigger, Options } = props;
  const { listStyle } = createSelectStyle(selectProps);
  const [input, setInput] = useState<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setSelectRef(containerRef);
      setInput(containerRef.current.querySelector('input'));
    }
  }, [containerRef, searchKeyword]);

  return (
    <div
      ref={containerRef}
      role={input ? 'combobox' : 'listbox'}
      aria-controls="jdesignlab-select-list"
      aria-label={selectProps.placeholder || 'Select List'}
      aria-expanded={open}
      aria-haspopup={true}
      aria-disabled={selectProps.disabled}
    >
      {Trigger}
      <ul css={listStyle} id="jdesignlab-select-list" ref={ulRef}>
        {input && !searchValues.length ? (
          <SelectNotfound />
        ) : input ? (
          searchValues.map(option => (
            <ComboboxOption key={option.key} value={option.key || ''} disabled={option.isDisabled}>
              {option.name}
            </ComboboxOption>
          ))
        ) : (
          Options
        )}
      </ul>
    </div>
  );
};
