export const combineClassNames = (classVariant: string, customClass: string | undefined) => {
  if (!customClass) return classVariant;
  else return `${customClass} ${classVariant}`;
};
