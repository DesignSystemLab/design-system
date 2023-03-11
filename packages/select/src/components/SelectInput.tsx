/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { SelectContext } from '../hooks/SelectContext';
import { useSelectStyle } from '../hooks/useInputStyle';
import { useSearchOptions } from '../hooks/useSearchOptions';

export const SelectInput = () => {
  const { inputStyle } = useSelectStyle();
  const { setIsOpen, searchKeyword } = useContext(SelectContext);
  const { handleInput } = useSearchOptions();

  return (
    <input
      css={inputStyle}
      type="text"
      placeholder="Search Options.."
      onClick={() => {
        setIsOpen(true);
      }}
      onInput={handleInput}
      value={searchKeyword}
    />
  );
};
