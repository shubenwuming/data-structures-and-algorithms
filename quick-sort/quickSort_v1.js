const quickSort = function (arr) {
  // 递归结束条件
  if(arr.length < 2) return arr;

  // 基准
  const pivot = arr.splice(0, 1);
  // 左区
  const left = [];
  // 右区
  const right = [];

  // 将剩余元素按照一定规则，分配到左区、右区。
  for(let i = 0; i < arr.length; i++) {
    // 大于基准值的分配到右区，小于基准值的分配到左区
    if(arr[i] > pivot[0]) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }

  // 返回 左区 拼 基准 拼 右区， 再对左区、右区分别重选基准分区
  return quickSort(left).concat(pivot).concat(quickSort(right));
}

console.log(quickSort([27, 38, 12, 39, 27, 16]));

