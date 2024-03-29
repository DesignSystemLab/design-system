export type JDesignSystemComponent =
  | 'box'
  | 'checkbox'
  | 'flex'
  | 'modal'
  | 'tabs'
  | 'tooltip'
  | 'button'
  | 'drawer'
  | 'select'
  | 'popover'
  | 'textarea'
  | 'card'
  | 'dropdown'
  | 'input'
  | 'radio'
  | 'stack';

export type JDesignSystemElementRoles =
  | 'overlay'
  | 'wrapper'
  | 'group'
  | 'content'
  | 'label'
  | 'ul'
  | 'ol'
  | 'item'
  | 'footer'
  | 'header'
  | 'trigger'
  | 'message'
  | 'article'
  | 'button'
  | 'input'
  | 'portal'
  | 'icon';

export type ClassNameVariant =
  | `j-${JDesignSystemComponent}__${string}-${JDesignSystemElementRoles}`
  | `j-${JDesignSystemComponent}__${JDesignSystemElementRoles}`;
