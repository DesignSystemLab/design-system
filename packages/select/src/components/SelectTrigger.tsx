/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useRef } from 'react';
import { ChevronBottom } from '@jdesignlab/react-icons';
import { useSelect } from '../hooks/useSelect';
import { SelectContext } from '../hooks/SelectContext';
import { createSelectTriggerStyle } from '../styles/createSelectTriggerStyle';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';
import { SelectInput } from './SelectInput';

export const SelectTrigger = (props: { placeholder: string; children?: React.ReactNode }) => {
  const { selectProps, setOpen, selectedOption } = useContext(SelectContext);
  const { triggerStyle, color, flexStyle } = createSelectTriggerStyle(selectProps.color, selectProps.disabled);
  const { filterChildren } = useSelect();
  const { handleKeydown } = useKeyboardNavigation();
  const selectInput = filterChildren(props.children, SelectInput, true);

  return (
    <div
      css={triggerStyle}
      onClick={e => {
        if (selectInput.length || selectProps.disabled) {
          e.preventDefault();
          return;
        }
        setOpen(prev => !prev);
      }}
      onKeyDown={e => {
        e.stopPropagation();
        if (e.key === 'Escape') {
          setOpen(false);
          return;
        }
        handleKeydown(e);
      }}
    >
      <div css={flexStyle}>
        <div>{selectInput.length ? selectInput : <span>{selectedOption.name || props.placeholder}</span>}</div>
        <span>
          <ChevronBottom
            width="12px"
            color={color}
            onClick={e => {
              setOpen(prev => !prev);
            }}
          />
        </span>
      </div>
    </div>
  );
};
