## Class
- 类名大写
- 类和模块的内部默认是严格模式
- 特殊的Function，继承Function的一些原型
  - `typeof Point`  "function"
  - `Point === Point.prototype.constructor`
- 类不存在变量提升
  - 先声明后使用
  - 子类在父类之后定义
- 和构造函数的不同：必须new `new Foo()`,不能直接调用`Foo()`
- 枚举：
  - `Object.keys(Foo.prototype)` 不可枚举
  - `Object.getOwnPropertyNames(Point.prototype)` 可枚举
- 类定义的方法都会被实例继承
- static静态方法不会被实例继承，而是通过类直接调用

```
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

  [methodName]() {
      // ...
    }
}
```

### constructor
- 类默认方法，new 调用
- 默认返回实例对象this

### 类实例和原型
- 显式定义在this上，则为定义在实例上
- 内部方法定义在类的原型prototype上
- 在类的实例上面调用方法，其实就是调用原型上的方法
  - 实例调用(原型)方法：`b.constructor === B.prototype.constructor // true`
  - 实例的原型：`p1.__proto__ === p2.__proto__ === Point.prototype`
- 从外部向类添加方法：
  ```javascript
  Object.assign(Point.prototype, {
    toString(){},
    toValue(){}
  });
  ```

### 类表达式
```
// 类名MyClass, Me只能内部使用
const MyClass = class Me {
    getClassName() {
      return Me.name;
    }
};



let Person = new class { // 类名Person
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}('张三'); // 省略new过程，立即执行

person.sayName(); // "张三"
```

### 私有方法和私有属性
- 命名区别
- 移出模块
```
class Widget {
  foo (baz) {
    bar.call(this, baz);
  }
}

function bar(baz) {
  return this.snaf = baz;
}
```

### 静态方法
- 通过类直接调用
- static静态方法不会被实例继承，实例无法调用
- 父类的静态方法，可以被子类继承
- 静态方法this指的是类
```
class Foo {
  static bar () {
    this.baz();
  }
  static baz () {
    console.log('hello');
  }
  baz () {
    console.log('world');
  }
}

Foo.bar() // 类的静态方法bar:hello


class Bar extends Foo { // 子类
  static classMethod() {
    return super.bar() + ', too'; // 调用父类静态方法
  }
}
Bar.bar() // 'hello'
```

### 实例属性
```
class Foo {
  // 新写法
  myProp = 42; //定义实例myProp属性
  state = {
      count: 0
    };

 // 老写法
  constructor(props) {
      super(props);
      this.state = { // 定义实例this.state属性
        count: 0
      };
  }
}

```

### 类的静态属性
-  Class 本身的属性，而不是定义在实例对象（this）上的属性
```
class Foo {
    // 新写法
    static myStaticProp = 42;
}
// 老写法
Foo.prop = 1;
```



## 相关链接

[Class 的基本语法](http://es6.ruanyifeng.com/#docs/class#this-%E7%9A%84%E6%8C%87%E5%90%91)