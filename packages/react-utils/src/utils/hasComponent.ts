export const hasComponent = (children: React.ReactElement | React.ReactElement[], componentName: string) => {
  let having = false;
  if (children) {
    if (Array.isArray(children)) {
      children.forEach((child: React.ReactElement) => {
        const tagName = typeof child.type === 'function' ? child.type.name : child.type;
        if (tagName === componentName) having = true;
      });
    } else {
      const tagName = typeof children.type === 'function' ? children.type.name : children.type;
      if (tagName === componentName) having = true;
    }
  }
  return having;
};
