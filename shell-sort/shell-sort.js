 /**
  * 希尔排序
  * 又称递减增量排序，是插入排序的改进版本
  * 他是基于插入排序的两个方面改进的
  * 1、插入排序在对几乎已经排序好的数据进行排序时，效率高，可以达到线性排序的效率，即O(n)
  * 2、插入排序每次只能将数据移动一位
  */

 /**
  * 核心思想
  * 分组 进行 插入排序
  * 将整个序列分成若干个子序列，分别进行插入排序，当这些子序列基本有序时，再对整体进行插入排序
  * 如何分组：将数组中间隔一定步长的元素分为一组
  */

 /**
  * 时间复杂度：O(nlogn)
  * 空间复杂度：O(1)
  * 稳定性：不稳定
  */

 const arr = [4, 2, 1, 6, 3, 8, 9, 5];

 const shellSort = function (arr) {
  let length = arr.length;
  // 初始分组步长为数组长度除2，后续分组步长为上次步长除2
  let gap = Math.floor(length / 2);
  // 待插元素
  let current;
  // 已排序边界
  let boundary;
  // 此层循环控制分几次组及 每次分组的步长
  while(gap > 0) {
    for (let i = gap; i < length; i++) {
      current = arr[i];
      boundary = i - gap;
      for (boundary; boundary >= 0 && arr[boundary] > current; boundary -= gap) {
        arr[boundary + gap] = arr[boundary]
      }
      arr[boundary + gap] = current;
    }
    gap = Math.floor(gap / 2);
  }
  
  return arr;
}

console.log(shellSort(arr));