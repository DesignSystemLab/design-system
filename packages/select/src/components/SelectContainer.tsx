/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useRef } from 'react';
import { SelectContext } from '../hooks/SelectContext';
import { useOptionStyle } from '../hooks/useOptionStyle';
import { SelectNotfound } from './SelectNotfound';
import { SelectOption } from './SelectOption';

export const SelectContainer = (props: { children: React.ReactNode; Trigger: React.ReactNode }) => {
  const { Trigger, children } = props;
  const { selectProps, isOpen, setSelectRef, searchValues, isCombobox, searchKeyword } = useContext(SelectContext);
  const { listStyle } = useOptionStyle(selectProps);
  const ref = useRef(null);

  useEffect(() => {
    setSelectRef(ref);
  }, [ref]);

  return (
    <div
      ref={ref}
      role="combobox"
      aria-controls="jdesignlab-select-list"
      aria-label={selectProps.placeholder || 'Select List'}
      aria-expanded={isOpen}
      aria-selected={true}
      aria-haspopup={true}
    >
      {Trigger}
      <ul css={listStyle} id="jdesignlab-select-list">
        {isCombobox && !searchValues.length ? (
          <SelectNotfound />
        ) : isCombobox ? (
          searchValues.map(option => (
            <SelectOption key={option.key} value={option.key || ''} disabled={option.isDisabled} autofocus={false}>
              <span>{option.name}</span>
            </SelectOption>
          ))
        ) : (
          children
        )}
      </ul>
    </div>
  );
};
