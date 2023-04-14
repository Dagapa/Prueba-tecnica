import { SortDirection, TickerData } from "types";

const quickSort = <T>(
  arr: T[],
  left = 0,
  right = arr.length - 1,
  key: keyof T
): T[] => {
  if (left >= right) {
    return arr;
  }

  const pivot = arr[Math.floor((left + right) / 2)][key];
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i][key] < pivot) {
      i++;
    }

    while (arr[j][key] > pivot) {
      j--;
    }

    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }

  quickSort(arr, left, j, key);
  quickSort(arr, i, right, key);

  return arr;
};

export const sortTickers = (
  tickers: TickerData[],
  sortField: keyof TickerData,
  sortDirection: SortDirection
): TickerData[] => {
  const sortedTickers = quickSort(
    [...tickers],
    0,
    tickers.length - 1,
    sortField
  );
  return sortDirection === "asc" ? sortedTickers : sortedTickers.reverse();
};
