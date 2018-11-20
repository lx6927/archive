# es6



## Module


###



Module 模块 静态加载
CommonJS 模块 动态加载：`require('fs')`

自动采用严格模式(es5)

顶层的this指向undefined：利用顶层的this等于undefined这个语法点，可以侦测当前代码是否在 ES6 模块之中


### export 接口
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
export function f() {};

// 正确
function f() {}
export {f};

// 整体输出
export * from 'my_module';
// 接口改名
export { foo as myFoo } from 'my_module';
```

没有提供对外的接口，直接输出1，1只是一个值，不是接口，
function和class的输出也必须遵守这样的写法
```
// 报错
export 1;

// 报错
var m = 1;
export m;

// 报错
function f() {}
export f;

```


## export default 默认输出
import命令可以为该匿名函数指定任意名字
一个模块只能有一个默认输出
```
export default function () {
  console.log('foo');
}


function foo() {
  console.log('foo');
}
export default foo;


```

## import
import变量都是只读
import是静态执行，所以不能使用表达式和变量
```

import { lastName as surname } from './profile.js';
import * as circle from './circle';


// 报错
import { 'f' + 'oo' } from 'my_module';

// 报错
let module = 'my_module';
import { foo } from module;

// 报错
if (x === 1) {
  import { foo } from 'module1';
} else {
  import { foo } from 'module2';
}
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