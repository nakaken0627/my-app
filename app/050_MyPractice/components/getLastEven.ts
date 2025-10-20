export const getLastEven = (arr: number[]) => {
  return arr.findLast((n) => n % 2 === 0);
};
