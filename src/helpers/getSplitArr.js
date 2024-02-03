export const getSplitArr = (arr, delimiter) => {
  return arr.split(delimiter).map(el => el.trim());
};
