/** @jsxImportSource @emotion/react */
import { Close } from '@jdesignlab/react-icons';
import { Button } from '@jdesignlab/button';
import { useContext } from 'react';
import { ModalContext } from '../context';
// import { modalCloseButtonStyle, modalCloseButtonWrapperStyle, modalPortalStyle } from '../styles';
import * as Style from '../styles';
import { Overlay, Portal } from '@jdesignlab/react-utils';
import { ModalPortalProps } from '../types';
import { createClassVariant } from '@jdesignlab/theme';

export const ModalPortal = (props: ModalPortalProps) => {
  const { children, width = 500, height = 500, ...rest } = props;
  const { onClose, hasCloseIcon, disableOverlayClose } = useContext(ModalContext);

  return (
    <Portal className={createClassVariant('modal', 'portal')}>
      <Overlay onClick={() => disableOverlayClose || onClose()} className={createClassVariant('modal', 'overlay')} />
      <div role="dialog" className={createClassVariant('modal', 'content')} css={Style.portal(width, height)} {...rest}>
        {hasCloseIcon && (
          <div css={Style.closeIconWrapper} onClick={onClose}>
            <Button variant="unstyled" icon={<Close width={16} height={16} />} css={Style.closeIcon}></Button>
          </div>
        )}
        {children}
      </div>
    </Portal>
  );
};
ModalPortal.displayName = 'Modal.Portal';
