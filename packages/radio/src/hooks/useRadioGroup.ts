import { ForwardedRef, useCallback, useEffect, useRef } from 'react';

const useRadioGroup = (defalutValue: string | null, externalRef?: ForwardedRef<HTMLInputElement>) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const setDefaultValueCheck = useCallback(
    (el: HTMLInputElement, targetValue: string | null, externalRef?: ForwardedRef<HTMLInputElement>) => {
      const isUnavailable = el.hasAttribute('readonly') || el.hasAttribute('disabled');
      if (targetValue && targetValue === el.value && !isUnavailable) {
        el.checked = true;
      }
      if (externalRef && typeof externalRef === 'function') {
        externalRef(el);
      }
    },
    [ref]
  );

  useEffect(() => {
    if (ref.current) {
      const radioElements = ref.current.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>;
      radioElements.forEach(el => {
        setDefaultValueCheck(el, defalutValue, externalRef);
      });
    }
  }, [ref]);

  return ref;
};

export default useRadioGroup;
