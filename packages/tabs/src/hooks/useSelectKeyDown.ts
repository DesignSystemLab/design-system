import type { Dispatch, SetStateAction } from 'react';

export const useSelectKeyDown = (
  event: React.KeyboardEvent<HTMLElement>,
  value: string,
  setSelectedTab: Dispatch<SetStateAction<string>>
) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    setSelectedTab(value);
  }
};
