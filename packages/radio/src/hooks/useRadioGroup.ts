import { ForwardedRef, useCallback, useEffect, useRef } from 'react';

const useRadioGroup = (defaultValue?: string, externalRef?: ForwardedRef<HTMLInputElement>) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const setDefaultValueCheck = useCallback(
    (el: HTMLInputElement, targetValue?: string, extRef?: ForwardedRef<HTMLInputElement>) => {
      const isUnavailable = el.hasAttribute('readonly') || el.hasAttribute('disabled');
      if (targetValue && targetValue === el.value && !isUnavailable) {
        Object.assign(el, { checked: true });
      }
      if (extRef && typeof extRef === 'function') {
        extRef(el);
      }
      return el;
    },
    []
  );

  useEffect(() => {
    if (ref.current) {
      const radioElements = ref.current.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>;
      radioElements.forEach(el => {
        setDefaultValueCheck(el, defaultValue, externalRef);
      });
    }
  }, [defaultValue, externalRef, setDefaultValueCheck]);

  return ref;
};

export default useRadioGroup;
