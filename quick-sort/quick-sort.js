 /**
  * 快速排序
  * 时间复杂度：O(nlogn)
  * 空间复杂度：O(logn)
  * 稳定性：不稳定
  */


 /**
  * 核心思想
  * 分治 + 递归
  * 分治: 选基准值 小于基准值的放在基准值的左边， 大于基准值的放基准值的右边
  * 递归：函数内自己调用自己，结束条件是 左边界值 < 右边界值
  */


 // 交换
 const changePos = function (arr, index1, index2) {
   let temp = arr[index1];
   arr[index1] = arr[index2];
   arr[index2] = temp;
 } 

// 分区
const partition = function(arr, left, right) {
  let pivot = left;
  // 比基准值小的末尾预留下标
  let smallIndex = pivot + 1;
  // 循环除了基准值以外的元素
  for(let i = smallIndex; i <= right; i++) {

    // 发现比基准值小，则与 smallIndex 交换， 此时比基准值小的数目应该加1， 即smallIndex++
    if(arr[i] < arr[pivot]) {
      changePos(arr, i, smallIndex);
      smallIndex++
    }
  }
  //  循环结束后，应该把基准值 与 比基准值小的区域的最后一个值交换
  changePos(arr, pivot, smallIndex - 1)

  // 返回基准下标
  return smallIndex - 1;
}


const quickSort = function (arr, left, right) {
  let length = arr.length;
  // 基准
  let pivot;
  // 左边界
  left = left ? left : 0;
  // 右边界
  right = right ? right : length - 1;

  
  console.log(left, right);
  // 递归结束得条件是 right >= left;
  if(left < right) {
    // 分区，得到基准值得下标
    pivot = partition(arr, left, right);


    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}


const arr = [6, 2, 7, 12, 10, 5, 3, 4, 8];

console.log(quickSort(arr));

