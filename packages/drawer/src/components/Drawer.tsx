/** @jsxImportSource @emotion/react */
import { DrawerProvider } from './DrawerContext';
import { DrawerContent } from './DrawerContent';
import { DrawerHeader } from './DrawerHeader';
import { DrawerBody } from './DrawerBody';
import { DrawerFooter } from './DrawerFooter';
import type { DrawerProps } from '../types';

export const Drawer = (props: DrawerProps) => {
  const { children, ...propsWithoutChildren } = props;

  return (
    <DrawerProvider drawerProps={propsWithoutChildren}>
      <DrawerContent>{props.children}</DrawerContent>
    </DrawerProvider>
  );
};

Drawer.DrawerContent = DrawerContent;
Drawer.DrawerHeader = DrawerHeader;
Drawer.DrawerBody = DrawerBody;
Drawer.DrawerFooter = DrawerFooter;
