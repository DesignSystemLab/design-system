/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { ChevronBottom } from '@jdesignlab/react-icons';
import { Flex } from '@jdesignlab/flex';
import { SelectContext } from '../hooks/SelectContext';
import { useTriggerStyle } from '../hooks/useTriggerStyle';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';

export const SelectTrigger = (props: { placeholder: string | null }) => {
  const { selectProps, setIsOpen, value, selectRef } = useContext(SelectContext);
  const handleKeydown = useKeyboardNavigation(selectRef);
  const { triggerStyle, color } = useTriggerStyle(selectProps.color, selectProps.disabled);

  return (
    <div
      tabIndex={0}
      css={triggerStyle}
      onClick={() => {
        if (!selectProps.disabled) {
          setIsOpen(prev => !prev);
        }
      }}
      onKeyDown={e => {
        if (e.key === 'Escape') {
          setIsOpen(false);
          return;
        }
        return handleKeydown(e);
      }}
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
