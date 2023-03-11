import { useOptionStyle } from '../hooks/useOptionStyle';

/** @jsxImportSource @emotion/react */
export const SelectNotfound = () => {
  const { notfound } = useOptionStyle();
  return <li css={notfound}>검색 결과가 없습니다.</li>;
};
