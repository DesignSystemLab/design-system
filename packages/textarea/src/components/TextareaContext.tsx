import { createContext, useId } from 'react';
import { DEFAULT_STYLE, TEXTAREA_ID_PREFIX } from '../constants';
import type { ReturnContext } from '../types';

const defaultContextValues: ReturnContext = {
  textareaId: '',
  styleProps: DEFAULT_STYLE,
  textareaProps: {}
};

export const TextareaContext = createContext<ReturnContext>(defaultContextValues);

export const TextareaProvider = ({ ...props }) => {
  const defaultStyleProps = defaultContextValues.styleProps;
  const { children, textareaProps } = props;
  const textareaId = textareaProps.id ? `${textareaProps.id}` : `${TEXTAREA_ID_PREFIX}-${useId()}`;
  const {
    width = defaultStyleProps.width,
    label = defaultStyleProps.label,
    resize = defaultStyleProps.resize,
    color = defaultStyleProps.color,
    appearance = defaultStyleProps.appearance,
    maxWidth = defaultStyleProps.maxWidth,
    maxHeight = defaultStyleProps.maxHeight,
    maxLength = defaultStyleProps.maxLength,
    ...restProps
  } = textareaProps;

  return (
    <TextareaContext.Provider
      value={{
        textareaId,
        textareaProps: restProps,
        styleProps: { width, label, resize, color, appearance, maxWidth, maxHeight, maxLength }
      }}
    >
      {children}
    </TextareaContext.Provider>
  );
};
