

## 使用 Array.includes 来处理多重条件

```
// 条件语句
function test(fruit) {
  if (fruit == 'apple' || fruit == 'strawberry') {
    console.log('red');
  }
}

// 重构
function test(fruit) {
  // 把条件提取到数组中
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
  if (redFruits.includes(fruit)) {
    console.log('red');
  }
}
```


## 使用函数默认参数和解构
```
function test(fruit, quantity) {
  if (!fruit) return;
  const q = quantity || 1; // 如果没有提供 quantity，默认为 1
  console.log(`We have ${q}${fruit}!`);
}
// 测试结果
test('banana'); // We have 1 banana!
test('apple', 2); // We have 2 apple!

// 重构
function test(fruit, quantity = 1) { // 如果没有提供 quantity，默认为 1
    if (!fruit) return;
    console.log(`We have ${quantity}${fruit}!`);
}



function test(fruit) {
  // 如果有值，则打印出来
  if (fruit && fruit.name)  {
    console.log (fruit.name);
  } else {
    console.log('unknown');
  }
}
// 测试结果
test(undefined); // unknown
test({ }); // unknown
test({ name: 'apple', color: 'red' }); // apple


// 解构 —— 只得到 name 属性
// 默认参数为空对象 {}
function test({name} = {}) { //name===undefined
  console.log (name || 'unknown');
}
```



## 相关链接

[五个小技巧让你写出更好的 JavaScript 条件语句](https://mp.weixin.qq.com/s/k9W1uM4eJtcHRSsbW_KNqg)

