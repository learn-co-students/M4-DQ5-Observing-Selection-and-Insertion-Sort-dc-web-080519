function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])

  for (let i = 0; i < arr.length-1; i++) {
    let min = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
  if (min !== i)
  {
    swapArrayElements(arr, min, i)
  }
  }
}

const swapArrayElements = function(arr, indexA, indexB) {
  let temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};
