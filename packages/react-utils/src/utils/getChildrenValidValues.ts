export const getChildrenValidValues = (children: React.ReactElement | React.ReactElement[], componentName: string) => {
  const values = [] as any[];
  if (children) {
    if (Array.isArray(children)) {
      children.forEach((child: React.ReactElement) => {
        const tagName = typeof child.type === 'function' ? child.type.name : child.type;
        if (tagName === componentName && !child.props.disabled) {
          values.push(child.props.value);
        }
      });
    } else {
      const tagName = typeof children.type === 'function' ? children.type.name : children.type;
      if (tagName === componentName && !children.props.disabled) {
        values.push(children.props.value);
      }
    }
  }
  return values;
};
