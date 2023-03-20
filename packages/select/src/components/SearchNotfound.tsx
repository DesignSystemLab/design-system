import { createSelectStyle } from '../styles/createSelectStyle';

/** @jsxImportSource @emotion/react */
export const SelectNotfound = () => {
  const { notfound } = createSelectStyle();
  return <li css={notfound}>검색 결과가 없습니다.</li>;
};
