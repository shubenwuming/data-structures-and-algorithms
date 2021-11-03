let arr = [5, 2, 1, 6, 10, 7, 8];

// 取未排序部分第一个元素 插入到已排序的合适位置，在这期间已排序部分后移腾出位置。

const insertSort = function (arr) {
  // 待插入元素
  let currentInsert;
  // 有序下标
  let orderIndex;
  let length = arr.length;
  // 遍历无序元素，将他们依次插入到有序部分的合适位置
  for (let i = 1; i < length; i++) {
    currentInsert = arr[i];
    orderIndex = i - 1;
    // 从右往左遍历，找到插入的合适位置, 并将比插入元素大的元素右移
    while(orderIndex >= 0 && arr[orderIndex] > currentInsert) {
      arr[orderIndex + 1] = arr[orderIndex];
      orderIndex--;
    }
    
    // 插入元素
    arr[orderIndex + 1] = currentInsert;
  }
  return arr;
}

console.log(insertSort(arr))