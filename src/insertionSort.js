function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  const len = arr.length;
  for (let i = 0; i < len; i++) {
  let el = arr[i];
  let j;

  for (j = i - 1; j >= 0 && arr[j] > el; j--) {
    arr[j + 1] = arr[j];
  }
  arr[j + 1] = el;
  }
  return arr;
}
