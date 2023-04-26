export const calculateElementPosition = (targetEl: HTMLElement, contentEl: HTMLElement, gap: number) => {
  const targetW = targetEl.offsetWidth;
  const targetH = targetEl.offsetHeight;

  const contentW = contentEl.offsetWidth;
  const contentH = contentEl.offsetHeight;

  const centerX = { left: targetW / 2, transform: `translateX(-${contentW / 2}px)` };
  const centerY = { bottom: targetH / 2, transform: `translateY(${contentH / 2}px)` };
  const moveTop = { bottom: `${targetH + gap}px` };
  const moveBottom = { top: `${targetH + gap}px` };
  const moveRight = { left: `${targetW + gap}px` };
  const moveLeft = { left: `-${contentW + gap}px` };
  const onRight = { left: targetW - contentW };
  const onBottom = { top: targetH - contentH };

  return { centerX, centerY, moveTop, moveBottom, moveRight, moveLeft, onRight, onBottom };
};
