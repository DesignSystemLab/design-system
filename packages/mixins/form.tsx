/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { inputRightStyle } from '@jdesignlab/textinput/src/input-style';

import { ClearableIcon, VisibleIcon, UnvisibleIcon } from '@jdesignlab/theme';

export const ControlClear = ({ value, setValue }: any) => {
    const onClick = () => {
        setValue(null);
    };
    return (
        <span className="append" css={inputRightStyle} onClick={onClick}>
            <ClearableIcon />
        </span>
    );
};

export const ControlVisible = ({ type, setType }: any) => {
    const onClick = () => {
        type === 'password' && setType('text');
        type === 'text' && setType('password');
    };
    return (
        <span className="append" css={inputRightStyle} onClick={onClick}>
            {type === 'password' ? <UnvisibleIcon /> : <VisibleIcon />}
        </span>
    );
};
