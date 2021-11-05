function sort (arr, left, right) {
  var len = arr.length;
  var partitionIndex;
  var left = left ? left : 0;
  var right = right ? right : len - 1;

  if(left < right) {
    partitionIndex = partition(arr, left, right);
    sort(arr, left, partitionIndex - 1);
    sort(arr, partitionIndex + 1, right)
  }
  return arr;
}
function partition(arr, left, right) {
  var pivot = left;
  var index = pivot + 1;
  for (var i = index; i <= right; i++) {
    if(arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}

function swap (arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// const arr = [6, 2, 7, 12, 10, 5, 3, 4, 8];
var arr = [5, 4, 3, 2, 1]

console.log(sort(arr));
