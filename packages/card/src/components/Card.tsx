/** @jsxImportSource @emotion/react */
import { CardProvider } from './CardProvider';
import { CardContainer } from './CardContainer';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { CardDivider } from './CardDivider';
import { REQUIRED_CARD_PROPS } from '../constants';
import omitProps from '../utils/omitProps';
import type { CardProps } from '../types';

export const Card = ({ children, ...restProps }: CardProps) => {
  const domAttributes = omitProps(restProps, REQUIRED_CARD_PROPS);

  return (
    <CardProvider cardProps={restProps}>
      <CardContainer {...domAttributes}>{children}</CardContainer>
    </CardProvider>
  );
};

Card.displayName = 'Card';
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Divider = CardDivider;
