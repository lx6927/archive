题：`["1","2","3"].map(parseInt)`返回值？

答：返回值`[1, NaN, NaN]`

`parseInt（string，radix)`params:字符串，基数
<==>
[parseInt(1,0),parseInt(2,1),parseInt(3,2)]

***
题：以下代码输出？
```
var a = 10;
(function a(){
    console.log(a);
    var a = 100;
    console.log(a);
})();
```

答：
```
undefined
100
```

***
题：实现一个函数，判断输入是不是回文字符串
```
function run(input) {
    if(typeof input !=='string') return false;
    return input.split('').reverse().join('') === input;
}
```

***
题：请简单实现双向数据绑定mvvm
```
<input id="input"/>
const obj = {};
const input = document.getElementById('input');

Object.defineProperty(obj, 'text', {
    set(newVal) {
        input.value = newVal; // input设置value
        this.value = newVal; // obj设置value
    }
});
document.addEventListener('change', function (e) {
    obj.text = e.target.value; // 访问访问器属性text
})
```

访问器属性：Object.defineProperty
```
Object.defineProperty(obj, "hello", {
 get: function () {return sth},
 set: function (val) {/* do sth */}
})
```
可以像普通属性一样读取访问器属性
访问器属性的会"覆盖"同名的普通属性
读取属性，就是调用get函数并返回get函数的返回值
属性赋值，就是调用set函数，赋值其实是传参

***
题：实现Storage，使得该对象为单例，并对localStorage进行封装设置值setItem(key,value)和getItem(key)
```
var instance = null;
class Storage{
    static getInstance() {
    if (!instance) {
      instance = new Storage();
    }
    return instance;
  }
  setItem = (key, value) => localStorage.setItem(key, value),
  getItem = key => localStorage.getItem(key)
}
```

***
题：数组[1,2,3,4]，请实现算法，得到这个数组的全排列的数组，如[2,1,3,4]，[2,1,4,3].....算法的时间复杂度是多少
```

```



### css
***
题：css居中

1.未知宽高水平垂直居中：

1)
```
.wrapper {
    display: flex;
}
.box {
    margin: auto;
}
```
2) 定位
```
.wrapper {
    position: relative;
}
.box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```
3) flex
```
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}
```
4) 表布局table-cell
```
.wrapper {
    text-align: center;
    vertical-align: middle;
    display: table-cell;
}
```
2.水平居中

1) box: inline-block
```
.wrapper {
    text-align: center;
}
.box{
    display: inline-block;
}
```
2) box: block,定宽
```
.box {
    display: block;
    width: 30px;
    margin: 0 auto;
}
```
3)
```
.wrapper {
    display: flex;
    justify-content: center;
}
```

3.垂直居中
```
.wrapper {
    display: flex;
    align-items: center;
}
```
```
.wrapper {
    display: table-cell;
    vertical-align: middle;
}
```
```
.wrapper {
    height: 100px;
    line-height: 100px;
}
```




## 相关链接

[30个你 “ 不可能全部会做 ” 的javascript题目及答案](http://developer.51cto.com/art/201504/474298_2.htm)
[百度、有赞、阿里前端面试总结](https://mp.weixin.qq.com/s/LAI1Rdqrf2Wq6STi0jsfVQ)