const filterProps = <P, K extends keyof P>(props: P, keys: K[]) => {
  const result = {} as Record<keyof P, P[Extract<keyof P, string>]>;
  for (const prop in props) {
    if (!keys.includes(prop as unknown as K)) {
      result[prop] = props[prop];
    }
  }
  return result;
};

export default filterProps;
