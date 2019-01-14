const quickSort = (array, lo = 0, hi = array.length - 1) => {
  if (lo >= hi) return array;
  const pivot = array[hi];
  let j = lo;
  for (let i = lo; i < hi; i++) {
    if (array[i] < pivot) {
      let temp = array[j];
      array[j++] = array[i];
      array[i] = temp;
    }
  }
  array[hi] = array[j];
  array[j] = pivot;
  quickSort(array, 0, j - 1);
  quickSort(array, j + 1, hi);
  return array;
}

console.log(quickSort([8, 11, 2, 1, 3, 1, 9, 10, 3, 2, 4]));