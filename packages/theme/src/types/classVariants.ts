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
  | 'dopdown'
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
  | 'input';

export type CssVariant =
  | `j-${JDesignSystemComponent}__${string}-${JDesignSystemElementRoles}`
  | `j-${JDesignSystemComponent}__${JDesignSystemElementRoles}`;
