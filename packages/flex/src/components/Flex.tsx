/** @jsxImportSource @emotion/react */
import { createClassVariant } from '@jdesignlab/theme';
import { containerStyle } from '../styles';
import type { FlexContainerProps } from '../types';
import { FlexItem } from './FlexItem';

export const Flex = (props: FlexContainerProps) => {
  const { children, style, as = 'div', ...otherProps } = props;
  const FlexContainer = as;

  return (
    <FlexContainer
      className={createClassVariant('flex', 'wrapper')}
      css={{ ...containerStyle(props), ...style }}
      {...otherProps}
    >
      {children}
    </FlexContainer>
  );
};

Flex.Item = FlexItem;
Flex.displayName = 'Flex';
