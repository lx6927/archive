## react面试题
虽然三年前写过一年相关项目，但是基本忘光了九敏。。有些公司还是用react的，写点文档用来复习

### 基础
react, mvvm框架

组件：

属性props是外界传递过来的，不能修改自身的props；

状态state是组件本身的，在组件中可以修改（通过api修改）；

props和state的变化都会更新视图；react单向数据流，父组件改变类props子组件视图会更新；

组件名称必须大写字母开头；

返回值只能有一个根元素；


### 类组件和函数组件
函数组件长这样：
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const result = Welcome(props) // 调用
```
类组件长这样：
```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const instance = new Welcome(props) // 生成实例
const result = instance.render()  // 调用
```

1. 语法上

（1）函数组件：

是函数式写法/纯函数;

无状态组件，没有state和生命周期;（也不能使用setState()；所有的生命周期钩子都来自于继承的React.Component；）

接收一个props对象返回一个react元素


（2）类组件：

继承React.Component并且创建render函数返回react元素;

有state和生命周期；

render函数中，this.props替换函数组件的props;

props不会变，但类组件中this一直可变



2. 性能上

函数组件更简单更有性能，因为类组件每次都需要生成实例

### state和props区别
props:传递给组件的参数；
state：组件内部自己管理的变量

### JSX

什么是jsx:

一个 JavaScript 的语法扩展.可以生成 React “元素”;

使用jsx原因：

React认为渲染逻辑本质上与其他UI逻辑存在内在耦合,所以使用JSX;


jsx特点/写法：

1.防止注入XSS攻击；在渲染所有输入内容之前，默认会进行转义；

2.顶层只能有一个根元素；

3.JSX中的标签可以是单标签（必须以/>结尾），也可以是双标签；

4.属性：驼峰名；属性值：引号"字符串"，或大括号{js表达式}，其他属性：class:className

5.注释：`{/* jsx注释 */}`


6.this问题：

绑定事件时候，this输出undefined
```js
btnClick(){
    console.log(this);
}
<button onClick={this.btnClick}/>
```


解决方法：

(1)显示绑定this:

`<button onClick={this.btnClick.bind(this)}/>`

(2)构造函数constructor绑定：
```js(
constructor(){
    super();
    this.state={};
    this.btnClick=this.btnClick.bind(this);
}
```
(3)箭头函数绑定事件
```js
<button onClick={()=>{this.btnClick()}}/>
<button onClick={(e)=>{this.btnClick(其他参数,e)}}/>
```
(4)箭头函数定义事件
获取到的this实际是class类中的this
```js
btnClick=()=>{
    console.log(this)
}
```

### 避免组件的重新渲染re-render
1.state变化会重新渲染：减少state数量，只有涉及用户交互的地方或者上下组件传值的地方才使用 state

2.props变化会重新渲染：子组件需要什么父组件再传递什么props;

3.component：

组件化，合理拆分组件：某个数据变化只更新一部分组件，其他组件不受影响；

尽量使用无状态组件；

4.生命周期函数：

componentWillUpdate 和 componentDidUpdate 阶段，界面数据的处理可能会造成界面再次渲染；

shouldComponentUpdate 中判断，如果组件传来的props相同，那么返回 false 不需要进行界面重新渲染;

