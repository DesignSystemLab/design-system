/** @jsxImportSource @emotion/react */
import { useContext, useEffect } from 'react';
import { ChevronBottom } from '@jdesignlab/react-icons';
import { Flex } from '@jdesignlab/flex';
import { SelectContext } from '../hooks/SelectContext';
import { useTriggerStyle } from '../hooks/useTriggerStyle';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';

export const SelectTrigger = (props: { placeholder: string | null; children: React.ReactNode }) => {
  const { children } = props;
  const { selectProps, setIsOpen, selectedOption, selectRef, setIsCombobox } = useContext(SelectContext);
  const { triggerStyle, color } = useTriggerStyle(selectProps.color, selectProps.disabled);
  const handleKeydown = useKeyboardNavigation(selectRef);

  useEffect(() => {
    if (children) {
      setIsCombobox(true);
    }
  }, [children]);

  return (
    <div
      tabIndex={0}
      css={triggerStyle}
      onClick={e => {
        if (children || selectProps.disabled) {
          e.preventDefault();
          return;
        }
        setIsOpen(prev => !prev);
        return;
      }}
      onKeyDown={e => {
        e.stopPropagation();
        if (e.key === 'Escape') {
          setIsOpen(false);
          return;
        }
        handleKeydown(e);
        return;
      }}
    >
      <Flex justify="space-between" items="center">
        <div>{children ? children : <span>{selectedOption.name || props.placeholder}</span>}</div>
        <span>
          <ChevronBottom width="12px" color={color} />
        </span>
      </Flex>
    </div>
  );
};
