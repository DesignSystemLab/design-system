/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { SelectContext } from '../hooks/SelectContext';
import { useOptionStyle } from '../hooks/useOptionStyle';

export const SelectContainer = (props: { children: React.ReactNode; Trigger: React.ReactNode }) => {
  const { Trigger, children } = props;
  const { selectProps, isOpen } = useContext(SelectContext);
  const { listStyle } = useOptionStyle(selectProps);

  return (
    <div
      role="combobox"
      aria-controls="jdesignlab-select-list"
      aria-label={selectProps.placeholder || 'Select List'}
      aria-expanded={isOpen}
      aria-selected={true}
      aria-haspopup={true}
    >
      {Trigger}
      <ul css={listStyle} id="jdesignlab-select-list">
        {children}
      </ul>
    </div>
  );
};
