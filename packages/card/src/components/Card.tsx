/** @jsxImportSource @emotion/react */
import { CardProvider } from './CardContext';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { CardContainer } from './CardContainer';
import { CardDivider } from './CardDivider';
import { REQUIRED_CARD_PROPS } from '../constants';
import omitProps from '../utils/omitProps';
import type { CardProps } from '../types';

export const Card = (props: CardProps) => {
  const { children, ...propsWithoutChildren } = props;
  const domAttributes = omitProps(propsWithoutChildren, REQUIRED_CARD_PROPS);

  return (
    <CardProvider cardProps={propsWithoutChildren}>
      <Card.Container {...domAttributes}>{props.children}</Card.Container>
    </CardProvider>
  );
};

Card.Container = CardContainer;
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Divider = CardDivider;
