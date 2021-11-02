 /**
  * 思路：
  * 双层for循环 外层控制趟数， 内层控制相邻比较
  */

const sortArr1 = [3,44,38,5,47,15];
const sortArr2 = [3,44,38,5,47,15];
const sortArr3 = [3,44,38,5,47,15];

const change = function (arr, index1, index2){
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}


// 版本一：未作任何优化
const bubbleSort1 = function (arr) {
  // 比较次数
  let count = 0;

  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if(arr[j] > arr[j+1]) {
        change(arr, j, j+1);
      }
      count++;
    }
  }
  return count;
}

// 版本二：判断外层循环中哪轮中一次交换都没有，可判断已经完成排序；
const bubbleSort2 = function (arr) {
   // 比较次数
   let count = 0;
   let length = arr.length;

   for (let i = 0; i < length - 1; i++) {
    //  本轮是否 一次交换都没有；
    let isChange = false;

    for (let j = 0; j < length - 1 - i; j++) {
      count++;
      if(arr[j] > arr[j+1]) {
        change(arr, j, j+1);
        isChange = true;
      }
    }

    if(!isChange) {
      return count;
    }
  }

  return count;
}

// 版本三： 双向冒泡排序，每轮循环中同时找到最大值，最小值； (排序元素越多，越明显)；
const bubbleSort3 = function (arr) {
  let low = 0;
  let high = arr.length - 1;
  let count = 0;
  while(low < high) {
    // 本轮中是否一次交换都没有
    let isChange = false; 
    
    // 找大值
    for(let i = low; i < high; i++) {
      count++;
      if(arr[i] > arr[i+1]) {
        isChange = true;
        change(arr, i, i+1);
      }
    }
    high--;

    // 找小值
    for(let j = high; j > low; j--) {
      count++;
      if(arr[j] < arr[j-1]) {
        isChange = true;
        change(arr, j, j-1);
      }
    }
    low++;

    if(!isChange) {
      return count;
    }

  }
  return count;
}

let count1 = bubbleSort1(sortArr1);
let count2 = bubbleSort2(sortArr2);
let count3 = bubbleSort3(sortArr3);

console.log(sortArr1, '比较了' + count1 + '次');
console.log(sortArr2, '比较了' + count2 + '次');
console.log(sortArr3, '比较了' + count3 + '次');