/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useRef } from 'react';
import { SelectContext } from '../hooks/SelectContext';
import { useOptionStyle } from '../hooks/useOptionStyle';

export const SelectContainer = (props: { children: React.ReactNode; Trigger: React.ReactNode }) => {
  const { Trigger, children } = props;
  const { selectProps, isOpen, setSelectRef } = useContext(SelectContext);
  const { listStyle } = useOptionStyle(selectProps);
  const ref = useRef(null);

  useEffect(() => {
    setSelectRef(ref);
  }, []);

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
        {children}
      </ul>
    </div>
  );
};
