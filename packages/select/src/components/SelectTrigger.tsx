/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { filterComponent } from '@jdesignlab/react-utils';
import { ChevronBottom } from '@jdesignlab/react-icons';
import { SelectContext } from '../hooks/SelectContext';
import { createSelectTriggerStyle } from '../styles/createSelectTriggerStyle';
import { SelectInput } from './SelectInput';

export const SelectTrigger = (props: { placeholder: string; children?: React.ReactNode }) => {
  const { selectProps, setOpen, selectedOption } = useContext(SelectContext);
  const { triggerStyle, color, flexStyle } = createSelectTriggerStyle(selectProps.color, selectProps.disabled);
  const selectInput = filterComponent(props.children, SelectInput, true);

  return (
    <div
      css={triggerStyle}
      role="button"
      onClick={e => {
        if (!selectProps.disabled) {
          setOpen(prev => !prev);
          e.preventDefault();
        }
      }}
    >
      <div css={flexStyle}>
        {selectInput.length ? selectInput : <span role="label">{selectedOption.name || props.placeholder}</span>}
        <div>
          <ChevronBottom width="12px" color={color} />
        </div>
      </div>
    </div>
  );
};
