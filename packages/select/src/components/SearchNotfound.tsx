import { createSelectStyle } from '../styles/createSelectStyle';

/** @jsxImportSource @emotion/react */
export const SelectNotfound = () => {
  const { notfound } = createSelectStyle();
  return (
    <li css={notfound}>
      <span role="note">검색 결과가 없습니다.</span>
    </li>
  );
};
