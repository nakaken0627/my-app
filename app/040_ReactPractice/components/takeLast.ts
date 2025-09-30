export const takeLast = (arr: number[], n: number) => {
  if (n === 0) {
    return [];
  } else {
    return arr.slice(-n);
  }
};
