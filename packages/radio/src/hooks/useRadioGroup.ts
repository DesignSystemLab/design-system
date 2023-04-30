import { useCallback, useEffect, useRef } from 'react';

const useRadioGroup = (defalutValue: string | null) => {
  const ref = useRef<HTMLDivElement>(null);

  const setDefaultValueCheck = useCallback(
    (el: HTMLInputElement, targetValue: string | null) => {
      const isUnavailable = el.hasAttribute('readonly') || el.hasAttribute('disabled');
      if (targetValue && targetValue === el.value && !isUnavailable) {
        el.checked = true;
      }
    },
    [ref]
  );

  useEffect(() => {
    if (ref.current) {
      const radioElements = ref.current.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>;
      radioElements.forEach(el => {
        setDefaultValueCheck(el, defalutValue);
      });
    }
  }, [ref]);

  return ref;
};

export default useRadioGroup;
