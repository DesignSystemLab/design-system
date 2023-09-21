/** @jsxImportSource @emotion/react */
import { Button } from '@jdesignlab/button';
import { Close } from '@jdesignlab/react-icons';
import { Overlay, Portal } from '@jdesignlab/react-utils';
import { createClassVariant } from '@jdesignlab/theme';
import { useContext } from 'react';
import { DrawerContext } from '../context';
import * as Style from '../styles';
import type { DrawerPortalProps } from '../types';

export const DrawerPortal = (props: DrawerPortalProps) => {
  const { children, width = 300, height = 300, ...restProps } = props;
  const { id, isOpen, onClose, hasCloseIcon, disableOverlayClose, placement, full } = useContext(DrawerContext);
  return (
    <Portal className={createClassVariant('drawer', 'portal')}>
      {isOpen && (
        <Overlay onClick={() => disableOverlayClose || onClose()} className={createClassVariant('drawer', 'overlay')} />
      )}
      <div
        role="dialog"
        id={`drawer-${id}`}
        aria-modal
        className={`${createClassVariant('drawer', 'content')} ${isOpen ? 'open' : ''}`}
        css={Style.portal(width, height, placement, full)}
        {...restProps}
      >
        {hasCloseIcon && (
          <div css={Style.closeIconWrapper}>
            <Button
              onClick={onClose}
              variant="unstyled"
              icon={<Close width={16} height={16} />}
              css={Style.closeIcon}
            />
          </div>
        )}
        {children}
      </div>
    </Portal>
  );
};

DrawerPortal.displayName = 'Drawer.Portal';
