function Stack () {
  // 数据存储 
  var items = []
  // 压栈
  this.push = function (item) {
    items.push(item)
  }
  // 出栈
  this.pop = function (item) {
    return items.pop(item)
  }
  // 查找栈顶元素
  this.top = function () {
    return items[items.length - 1]
  }
  // 判断栈是否为空
  this.isEmpty = function () {
    return items.length === 0
  }
  // 栈中元素个数
  this.size = function () {
    return items.length
  }
  // 清空栈
  this.clear = function () {
    items = []
  }
}

 /**
  * 例子
  */

let stack = new Stack()
stack.push(1)
stack.push(2)
console.log(stack.top())
console.log(stack.size())
console.log(stack.pop())
stack.clear()
console.log(stack.isEmpty()) 