import type { JDesignSystemComponent, JDesignSystemElementRoles, ClassNameVariant } from '../types/classVariants';

export const createClassVariant = (
  component: JDesignSystemComponent,
  element: JDesignSystemElementRoles,
  modifier?: string
): ClassNameVariant => {
  return modifier ? `j-${component}__${modifier}-${element}` : `j-${component}__${element}`;
};
