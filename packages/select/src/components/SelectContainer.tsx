/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useRef, useState, useId } from 'react';
import { SELECT_ID_PREPIX } from '../constants';
import { SelectContext } from '../hooks/SelectContext';
import { createSelectStyle } from '../styles/createSelectStyle';
import { ComboboxOption } from './ComboboxOption';
import { SelectNotfound } from './SearchNotfound';
import { ContainerProps } from '../types';

export const SelectContainer = (props: ContainerProps) => {
  const { selectProps, open, setSelectRef, searchValues, searchKeyword } = useContext(SelectContext);
  const { Trigger, Options } = props;
  const { listStyle, active, wrapperStyle } = createSelectStyle(selectProps);
  const [input, setInput] = useState<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const uid = useId();
  const selectElementId = `${SELECT_ID_PREPIX}-${uid}`;
  useEffect(() => {
    if (containerRef.current) {
      setSelectRef(containerRef);
      setInput(containerRef.current.querySelector('input'));
    }
  }, [containerRef, searchKeyword]);

  return (
    <div
      css={wrapperStyle}
      ref={containerRef}
      role={input ? 'combobox' : 'listbox'}
      aria-controls={selectElementId}
      aria-label={selectProps.placeholder || 'Select List'}
      aria-expanded={open}
      aria-haspopup={true}
      aria-disabled={selectProps.disabled}
    >
      {Trigger}
      <ul css={listStyle} id={selectElementId} ref={ulRef}>
        {input && !searchValues.length ? (
          <SelectNotfound />
        ) : input ? (
          searchValues.map(option => (
            <ComboboxOption key={option.key} value={option.key || ''} disabled={option.isDisabled} css={active}>
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
