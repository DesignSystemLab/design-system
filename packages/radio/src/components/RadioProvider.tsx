import type { ReactNode } from 'react';
import { useId, useMemo, useState } from 'react';
import { RadioContext } from '../context';
import { RADIO_NAME_PREFIX } from '../constants';
import type { RadioGroupProps, ReturnContext } from '../types';

interface RadioProviderProps {
  defaultValue?: string;
  children: ReactNode;
  rootProps?: RadioGroupProps;
}

export const RadioProvider = ({ ...props }: RadioProviderProps) => {
  const { children, defaultValue, rootProps } = props;
  const uuid = useId();
  const defaultName = `${RADIO_NAME_PREFIX}_${uuid}`;
  const [value, setValue] = useState<string>('');

  const providerValue = useMemo(
    () => ({
      setValue,
      value,
      defaultValue,
      name: defaultName,
      rootProps: { ...rootProps }
    }),
    [value, setValue, defaultValue, defaultName, rootProps]
  );

  return <RadioContext.Provider value={providerValue as ReturnContext}>{children}</RadioContext.Provider>;
};
