import type { JDesignSystemComponent, JDesignSystemElementRoles, CssVariant } from '../types/classVariants';

export const createClassVariant = (
  component: JDesignSystemComponent,
  element: JDesignSystemElementRoles,
  modifier?: string
): CssVariant => {
  return modifier ? `j-${component}__${modifier}-${element}` : `j-${component}__${element}`;
};
