/** @jsxImportSource @emotion/react */
import { CardProvider } from '../cardContext';
import { CardProps } from '../cardTypes';
import { CardHeader } from './cardHeader';
import { CardBody } from './cardBody';
import { cardFooter } from './cardFooter';
import { CardContainer } from './cardContainer';

export const Card = (props: CardProps) => {
  const { children, ...rest } = props;

  return (
    <CardProvider cardProps={rest}>
      <Card.Container as={props.as}>{props.children}</Card.Container>
    </CardProvider>
  );
};

Card.Container = CardContainer;
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = cardFooter;
