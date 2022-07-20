## react面试题
虽然三年前写过一年相关项目，但是基本忘光了九敏。。有些公司还是用react的，写点文档用来复习

### react基础
react, mvvm框架

组件：

属性props是外界传递过来的，不能修改自身的props；

状态state是组件本身的，在组件中可以修改（通过api修改）；

props和state的变化都会更新视图；react单向数据流，父组件改变类props子组件视图会更新；

组件名称必须大写字母开头；

返回值只能有一个根元素；

---
### 生命周期
挂载期(4)、更新期(5)、卸载期(1)，错误处理阶段(1),一共12个

1.挂载期（4个钩子）：

constructor()：

加载时调用一次，可以实现：初始化state,为事件处理函数绑定实例。

static getDerivedStateFromProps(props, state)：

在组件每次更新时会调用，让组件在props变化时更新state,每次接收新的props之后都会返回一个对象作为新的state，如果返回null，则不更新任何内容。

render()：

类组件中唯一必须实现的方法，创建虚拟dom树，更新dom树都在此进行。

componentDidMount()：

组件挂载之后调用，只调用一次。一般在这里请求数据。

2.更新期（5个钩子）：
static getDerivedStateFromProps(props, state)：

在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。

shouldComponentUpdate(nextProps, nextState)：

当 props 或 state 发生变化时，在渲染前调用，return true就会更新dom，return false能阻止更新。 仅作为性能优化的方式而存在。

render()：

render() 函数应该为纯函数，这意味着在不修改组件 state 的情况下，每次调用时都返回相同的结果，并且它不会直接与浏览器交互。保持 render() 为纯函数，可以使组件更容易思考。

getSnapshotBeforeUpdate(prevProps, prevState)

在最近一次的渲染提交到 DOM 节点之前调用，返回一个值，作为componentDidUpdate的第三个参数。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。

componentDidUpdate(prevProps, prevState, snapshot)

会在更新后会被立即调用，首次渲染不会执行此方法。 当组件更新后，可以在此处对 DOM 进行操作、 进行网络请求 。

3.卸载期（1个钩子）
componentWillUnmount()：

在组件卸载及销毁之前直接调用， 在此方法中执行必要的清理操作，例如，清楚timer，取消网络请求等等。

4.错误处理阶段（2个钩子）
static getDerivedStateFromError(error)：

在渲染阶段调用，它将抛出的错误作为参数，并返回一个值来更新state，不允许执行副作用。

componentDidCatch(error, info)：

在提交阶段被调用，用于记录错误，允许执行副作用

---
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

有状态组件，有state和生命周期；

render函数中，this.props替换函数组件的props;

props不会变，但类组件中this一直可变



2. 性能上

函数组件更简单更有性能，因为类组件每次都需要生成实例

---
### state和props区别
props:传递给组件的参数；

state：组件内部自己管理的变量

---
### JSX

什么是jsx:

一个 JavaScript 的语法扩展.可以生成 React “元素”;

每个 JSX 元素只是调用 React.createElement(component, props, ...children) 的语法糖

使用jsx原因：

React认为渲染逻辑本质上与其他UI逻辑存在内在耦合,所以使用JSX;


jsx特点/写法：

1.防止注入XSS攻击；在渲染所有输入内容之前，默认会进行转义；

2.顶层只能有一个根元素；

3.JSX中的标签可以是单标签（必须以/>结尾），也可以是双标签；

4.属性：驼峰名；属性值：引号"字符串"，或大括号{js表达式}，其他属性：class:className

5.注释：`{/* jsx注释 */}`

6.可用遍历数组/对象：map,forEach,for in

7.this问题：

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
---
### 避免组件的重新渲染re-render / react性能优化是哪个周期函数（shouldComponentUpdate）
1.state变化会重新渲染：减少state数量，只有涉及用户交互的地方或者上下组件传值的地方才使用 state

2.props变化会重新渲染：子组件需要什么父组件再传递什么props;

3.component：

组件化，合理拆分组件：某个数据变化只更新一部分组件，其他组件不受影响；

尽量使用无状态组件；

4.生命周期函数：

componentWillUpdate 和 componentDidUpdate 阶段，界面数据的处理可能会造成界面再次渲染；

shouldComponentUpdate(nextProps, nextState)中判断，如果组件传来的props相同，那么返回 false 不需要进行界面重新渲染;

5.其他的看不懂就先不写了

---
### React必须使用JSX吗 / 为什么使用jsx的组件中没有看到使用react却需要引入react
不是必须的，构建环境配置的babel会使jsx编译为js;

JSX是React.createElement(component, props, ...children)方法的语法糖（所以需要引入react）
```js
// 不用jsx
class Hello extends React.Component {
    render() {
        return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    }
}
```
---
### React组件通信
1.父子组件：

父->子：props；

子组件想向父组件传值（向上传值），可以通过调用父组件传过来的回调函数

2.祖孙组件(跨级组件)：

从上到下：props

中间层组件：引入context，使用context共享组件树中的数据(生产者-消费者模式)

3.兄弟组件(非嵌套组件)：
传给同一级组件
使用缓存sessionStorage、localStorage
路由跳转传值
event（发布--订阅）:event.js


---
### diff算法
dom渲染过程：

React组件配合 state 创建一个虚拟DOM树

根据虚拟DOM树，生成一个真正的 DOM 树，再渲染到页面中

当 state 或者 props 变化时，根据新的数据生成一个新的虚拟DOM树

将新旧虚拟 DOM 树进行对比，通过diff算法找到新旧虚拟DOM的差异点，最后将差异点更新到页面上

diff策略:

策略一（tree diff）： 按照树的层级进行比较，如果该节点不存在，则整个删除，不再继续比较；

跨层级dom操作的话，创建节点和删除节点（官方建议通过CSS隐藏、显示节点，而不是真正地移除、添加DOM节点）

策略二（component diff）： 每一层中组件对比

策略三（element diff)：如果两个组件类型相同，则需要对比组件中的元素

---
### 高阶组件HOC
将一个组件作为入参，输出另一个新组件的函数；

对原有组件增强和优化（添加额外的功能/数据），复用组件
/代码
---
### React Hooks
好像是新版本出现的新技术。。。之前没用过

函数组件用，

useState()： 状态钩子，类似state

useEffect()： 副作用钩子，类似componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。

useContext()： 上下文钩子

useReducer()：

---
### keys 的作用
唯一，用于追踪列表中元素修改添加移除等变化的辅助标识

---
### redux
状态容器


### React解决了什么问题
组件化

模块化

开发效率

运行效率：虚拟dom的diff算法

可维护性

