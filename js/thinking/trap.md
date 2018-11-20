## 容易错误的陷阱相关

`["1","2","3"].map(parseInt)`

返回值`[1, NaN, NaN]`
`parseInt（string，radix)`params:字符串，基数
<==>
[parseInt(1,0),parseInt(2,1),parseInt(3,2)]

***

```
var a = 10;
(function a(){
    console.log(a); // undefined
    var a = 100;
    console.log(a); //100
})();
```











## 相关链接

[30个你 “ 不可能全部会做 ” 的javascript题目及答案](http://developer.51cto.com/art/201504/474298_2.htm)