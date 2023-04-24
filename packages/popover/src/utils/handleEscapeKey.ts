import type { KeyboardEvent } from 'react';

const handleEscapeKey = (event: React.KeyboardEvent<HTMLElement>, onClose: () => void) => {
  event.stopPropagation();
  if (event.key === 'Escape') {
    onClose();
    return;
  }
};
export default handleEscapeKey;
