const arr = [1, 5, 2, 4, 8, 6, 3];

// 交换位置
const changePos = function (arr, index1, index2) {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0];
}

// 关注点应该是数组中未排序元素；

const selectSort = function (arr) {
  let length = arr.length;
  // 该变量用来储存未排序元素中最小值的下标
  let minIndex;
  for(let i = 0; i < length - 1; i++) {
    // 假设未排序元素中的第一个为最小值
     minIndex = i;
    //  遍历未排序元素第一个之后的元素，通过与假设的值对比，确立真正的最小值
    for (let j = i + 1; j < length; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 交换位置，将最小值放在未排序元素的第一个
    changePos(arr, i, minIndex);
  }

  return arr;
}

console.log(selectSort(arr));