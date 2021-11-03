let arr = [5, 2, 1, 6, 10, 7, 8];

// 取未排序部分第一个元素 插入到已排序的合适位置，在这期间已排序部分后移腾出位置。

const insertSort = function (arr) {
  let length = arr.length;
  let current;
  let preIndex;
  //  遍历未排序部分，讲未排序的元素依次插入到合适的位置
  for (let i = 1; i < length; i++) {
    // 当前待插入元素
    current = arr[i];
    preIndex = i - 1;

    while(preIndex >= 0 && arr[preIndex] > current) {
      // 已排序部分大于当前插入元素的统统后移给其腾出位置
      arr[preIndex + 1] = arr[preIndex];
      preIndex--
    }

    arr[preIndex + 1] = current;
  }
  return arr;
}

console.log(insertSort(arr))