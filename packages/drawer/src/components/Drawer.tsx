/** @jsxImportSource @emotion/react */
import { DrawerProvider } from './DrawerContext';
import { DrawerContent } from './DrawerContent';
import { DrawerHeader } from './DrawerHeader';
import { DrawerBody } from './DrawerBody';
import { DrawerFooter } from './DrawerFooter';
import type { DrawerProps } from '../types';

export const Drawer = (props: DrawerProps) => {
  const { children, ...propsWithoutChildren } = props;
  return <DrawerProvider drawerProps={propsWithoutChildren}>{props.children}</DrawerProvider>;
};

Drawer.Content = DrawerContent;
Drawer.Header = DrawerHeader;
Drawer.Body = DrawerBody;
Drawer.Footer = DrawerFooter;
