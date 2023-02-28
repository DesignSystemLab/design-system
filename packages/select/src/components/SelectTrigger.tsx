/** @jsxImportSource @emotion/react */
import { useContext, useEffect } from 'react';
import { ChevronBottom } from '@jdesignlab/react-icons';
import { Flex } from '@jdesignlab/flex';
import { SelectContext } from '../hooks/SelectContext';
import { useTriggerStyle } from '../hooks/useTriggerStyle';
import { useSelect } from '../hooks/useSelect';

export const SelectTrigger = (props: { placeholder: string | null }) => {
  const { selectProps, setIsOpen, value } = useContext(SelectContext);
  const { triggerStyle, color } = useTriggerStyle(selectProps.color, selectProps.disabled);
  const { handleKeyDown } = useSelect();

  return (
    <div
      tabIndex={0}
      css={triggerStyle}
      onClick={() => {
        if (!selectProps.disabled) {
          setIsOpen(prev => !prev);
        }
      }}
      onKeyDown={handleKeyDown}
    >
      <Flex justify="space-between" items="center">
        <span>{value.name || props.placeholder}</span>
        <span>
          <ChevronBottom width="12px" color={color} />
        </span>
      </Flex>
    </div>
  );
};
