const partition = function(arr, left, right) {
  // 基准值
  const pivotValue = arr[left];
  // 从左往右找大值的下标记录
  let i = left;
  // 做右往左找小值的下标记录
  let j = right;
  while(i < j) {
    // 从右往左记录小于基准的小值
    while(i < j && arr[j] >= pivotValue) {
      j--
    }
    // 从左往右记录大于基准的大值
    while(i < j && arr[i] <= pivotValue) {
      i++
    }
    if(i < j) {
      // 交换找到的大值和小值
      [arr[i], arr[j]] = [arr[j], arr[i]]
      // 交换后继续查找
      i++;
      j--;
    }
  }

  // 这里其实i === j, 想不明白的自己拿一个数组按这个步骤走。
  [arr[i], arr[left]] = [arr[left], arr[i]];

  // 返回基准下标
  return i;
}

const quickSort = function (arr, left = 0, right = arr.length - 1) {
  // 递归结束条件
  if (left >= right) return;

  // 基准下标
  let pivotIndex = partition(arr, left, right)

  // 对左区再选基准分区
  quickSort(arr, left, pivotIndex - 1);

  // 对右区再选基准分区
  quickSort(arr, pivotIndex + 1, right);

  // 返回拍好序的数组
  return arr;

}

console.log(quickSort([27, 38, 12, 39, 27, 16], 0, 5));

