# DP动态规划

> 动态规划算法通常基于一个递推公式及一个或多个初始状态。 当前子问题的解将由上一次子问题的解推出。使用动态规划来解题只需要多项式时间复杂度.保存已解决的子问题的答案，而在需要时再找出已求得的答案，这样就可以避免大量的重复计算，节省时间,实质上是一种以空间换时间的技术


算法：贪心算法，递推，dfs等
记忆化搜索：查表
最优化原理和最优子结构：排序，剪枝等
决策和无后效性：状态变化时，状态转移，且不影响之后其他状态的结果

状态：描述该问题的子问题的解
状态转移方程：描述状态之间是如何转移的


## 1 硬币组合
有面值为1元、3元和5元的硬币若干枚，如何用最少的硬币凑够11元？ (表面上这道题可以用贪心算法，但贪心算法无法保证可以求出解，比如1元换成2元的时候)


### 思路

d(i)=j                              表示凑够i元最少需要j个硬币:
d(0)=0                              凑够0元我们最少需要0个硬币
d(1)=d(1-1)+1=d(0)+1=0+1=1
d(2)=d(2-1)+1=d(1)+1=1+1=2
d(3)=d(3-1)+1=d(2)+1=2+1=3          凑够2元+1个1元硬币
    =d(3-3)+1=d(0)+1=0+1=1          凑够0元+1个3元硬币
d(3)=min{ d(3-1)+1, d(3-3)+1 }      状态转移方程,两种方案
d(4)=min{ d(4-1)+1, d(4-3)+1 }
d(5)=min( d(4-1)+1, d(5-3)+1, d(5-5)+1 }
...

状态转移方程:
d(i) = min{ d(i-1)+1, d(i-3)+1, d(i-5)+1 }
d(i)=min{ d(i-vj)+1 }                其中i-vj >=0，vj表示第j个硬币的面值;

### 输出

```js
function f(n) { //需要硬币数
    var f1, f2, f3;
    if (n === 0) return 0;
    if (n === 1 || n === 3 || n === 5) return 1;

    f1 = f(n - 1) + 1;
    f2 = n > 2 ? f(n - 3) + 1 : null; //n>=3
    f3 = n > 4 ? f(n - 5) + 1 : null;

    var _f = f1;
    if (f2) {
        _f = f2 > _f ? _f : f2;
    }
    if (f3) {
        _f = f3 > _f ? _f : f3;
    }
    return _f;
}

console.log("凑够1元", f(1));
console.log("凑够11元", f(11));
```



## 2 背包模型
一个贼在偷窃一家商店时发现了n件物品，其中第i件值vi元，重wi磅。他希望偷走的东西总和越值钱越好，但是他的背包只能放下W磅。请求解如何放能偷走最大价值的物品，这里vi、wi、W都是整数。


### 0-1背包
第i件值vi元(每种物品一件)，重wi磅,背包W磅,求v_max

f[i][w] 前i件放入容量w背包的最大价值

f[0][w] = 0
f[1][w] = max{ f[0][w], f[0][w-w1] + v1 }
f[2][w] = max{ f[1][w], f[1][w-w2] + v2 }

状态转移方程:
f[i][w] = max{ f[i][w], f[i-1][w-wi] + vi }   不放第i件,放第i件


### 完全背包
第i件值vi元(每种物品无限件)，重wi磅,背包W磅,求v_max
状态转移方程:
f[i][w] = max{ f[i-1][w-kwi] + kvi | 0<=k<=w/wi }    第i件放入k件


### 多重背包
第i件值vi元(每种物品mi件)，重wi磅,背包W磅,求v_max
状态转移方程:
f[i][w] = max{ f[i-1][w-kwi] + kvi | 0<=k<=mi }    第i件放入k件




## 3 数字三角形问题(二维DP)
<!--数字三角形a,找出从第一层到最后一层的一条路,使得所经过的权值之和最小或者最大-->
有一个由非负整数组成的三角形，第一行只有一个数，除了最下行之外每个数的左下方和右下方各有一个数。
从第一行的数开始，每次可以往左下或右下走一格，直到走到最下行，把沿途经过的数全部加起来。如何走才能使得这个和尽量大？
     [1]
   [2, 3]
  [4, 5, 6]
[7, 8, 9, 10]

### 思路

f[i][j] 表示从顶点(0,0)到顶点(i,j)的最大值,j<=i
a[i][j] 表示第i+1行j+1列的数字,j<=i

f[0][0] = a[0][0] = 1
f[1][0] = a[1][0]+ max{ f[0][0] }
f[1][1] = a[1][1]+ max{ f[0][0] }
f[2][0] = a[2][0]+ max{ f[1][0] }
f[2][1] = a[2][1]+ max{ f[1][1], f[1][0] }
f[2][2] = a[2][2]+ max{ f[1][1] }
...

转移方程：
自顶向下：f[i][j] = a[i][j] + max{ f[i-1][j], f[i-1][j-1] }   a[i][j]表示当前状态,f[i][j]表示指标函数
自底向上：f[i][j] = a[i][j] + max{ f[i+1][j], f[i+1][j+1] }
时间复杂度n^2



### 输出(自顶向下)
 ```js
var a = [
    [1],
    [2, 3],
    [4, 5, 6],
    [7, 8, 9, 10]
 ];

 function f(i, j, a) {
    var f1, f2, tmp = 0, k;
    if (i === 0 || j === 0) {
        return a[0][0];
    }
    if (j === i || j === 0) {
        for (k = 0; k <= i; k++)
            tmp += j===0?a[k][0]:a[k][k];
        return tmp;
    }
    f1 = f(i - 1, j, a);
    f2 = f(i - 1, j - 1, a);
    if (f1 < f2)
        return f2 + a[i][j];
    else
        return f1 + a[i][j];
 }

console.log(f(0, 0, a));//第1层
console.log(f(1, 1, a));//第2层
console.log(f(2, 2, a));
console.log(f(3, 2, a));
console.log(f(3, 3, a));

//记忆搜索
var opt = [];
```


 # 相关链接

 [动态规划：从新手到专家](http://www.hawstein.com/posts/dp-novice-to-advanced.html)

 [常见算法及问题场景——动态规划](http://blog.csdn.net/a345017062/article/details/52411094)

 [夜深人静写算法（2）：动态规划](http://blog.jobbole.com/96364/)

 [动态规划](https://baike.baidu.com/item/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/529408?fr=aladdin#5)
 
 
 