# ES6

《ECMAScript 2015 标准》（简称 ES2015）


## Module

### 概述
```javascript
// export.js
export var n = 1;
export function fn() {
};
export {n, fn};
import {n, fn} from './export'


// export-default.js
export default fn;
export default function () { //匿名函数
}
import fn from './export-default';
```



静态加载：import '...'  Module 模块
动态加载：`require('fs')` CommonJS 模块
动态加载：import()

自动采用严格模式(es5)

顶层的this指向undefined：利用顶层的this等于undefined这个语法点，可以侦测当前代码是否在 ES6 模块之中


### export 输出接口
规定对外的接口m，
在接口名与模块内部变量之间，建立了一一对应的关系，
export 声明语句||{变量}
```
// 正确
export var m = 1;

// 正确
var m = 1;
export {m};

// 正确，重命名
var n = 1;
export {n as m};

// 正确
export function fn() {};

// 正确
function fn() {}
export {fn};
```


```
// 报错
//没有提供对外的接口，直接输出1，1只是一个值，不是接口
export 1;

// 报错
var m = 1;
export m;

// 报错
//function和class的输出也必须遵守这样的写法
function f() {}
export f;

```


## export default 默认输出
一个模块只能有一个默认输出
import命令指定任意名字
```
export default function () {
  console.log('foo');
}


function foo() {
  console.log('foo');
}
export default foo;


// <==> 输出一个叫做default的变量或方法
function add(x, y) {
  return x * y;
}
export {add as default};
import { default as foo } from 'modules';
```

## import
import变量都是只读
import命令是编译阶段执行的，在代码运行之前
import会提升到整个模块的头部，首先执行
多次重复执行同一句import语句，只会执行一次
```
// 重命名
import { lastName as surname } from './profile.js';
// 整体加载
import * as circle from './circle'; // circle.xxx


// 报错,import是静态执行，所以不能使用表达式和变量
import { 'f' + 'oo' } from 'my_module';

// 报错
let module = 'my_module';
import { foo } from module;
```



## 浏览器加载 ES6 模块：
```
<script type="module" src="./foo.js"></script>
<script type="module">
  import utils from "./utils.js";
</script>
```


## 相关链接

[ECMAScript 6 入门](http://es6.ruanyifeng.com/#docs/module#export-%E5%91%BD%E4%BB%A4)