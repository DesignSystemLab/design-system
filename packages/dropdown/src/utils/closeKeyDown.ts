import { toggleOpen } from './toggleOpen';

const closeKeyDown = (event: React.KeyboardEvent<HTMLElement | HTMLUListElement>) => {
  const el = event.currentTarget;
  switch (event.key) {
    case 'Escape':
    case 'Esc':
      event.preventDefault();
      toggleOpen(el);
      break;
    default:
      break;
  }
};

export default closeKeyDown;
