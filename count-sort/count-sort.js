 /**
  * 计数排序
  * 使用场景：明确数值范围的大体量排序，比如高考考生的排名。明确数值范围0-750，且大体量
  */

const countSort = function (arr) {
  // res为最后的返回值，即排序好的数组
  const res = [];

  // 找出数值范围
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  // 创建新数组，数组长度为 max-min+1，此数组用来统计待排序数组中每个元素出现的次数，待排序数组中所有元素默认出现的次数都为0；
  const count = new Array(max - min + 1).fill(0);

  // 遍历待排序数组，统计待排序元素出现次数。 下标0的元素 统计 待排序中最小元素出现的次数，最大下标元素 其实统计的是 待排序中最小元素出现的次数
  for(let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++
  }

  // 遍历统计数组，将统计好的次数push到res中。出现次数为0，则不统计。出现次数为n的，需要push n次。
  for(let i = 0; i < count.length; i++) {
    while(count[i] > 0) {
      res.push(i + min);
      count[i]--;
    }
  }

  return res;
}

console.log(countSort([-1,2,1,9,5,6,7]))