# 1. 重学CSS | CSS基本语法,CSS基础机制（二）
## 课件及答疑回放：
链接： https://pan.baidu.com/s/1Zk1rzj3rBQF0vBp9jbGFcA
提取码：r59y
## 随堂练习：
请写出下面选择器的优先级

* div#a.b .c[id=x]
* #a:not(#b)
* *.a
* div.a
## 思考：
为什么 first-letter 可以设置 display:block 之类的，而 first-line 不行呢？
## 课后作业：
编写一个 match 函数


# 2. 重学CSS | 排版与排版相关属性,绘制与绘制相关属性
## 参考链接：
https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#flex-items
## 参考代码：
```
<div style="font-size:50px;line-height:100px;background-color:pink;">
    <div style="vertical-align:text-bottom;overflow:visible;display:inline-block;width:1px;height:1px;">
        <div style="width:1000px;;height:1px;background:red;"></div>
    </div>
    <div style="vertical-align:text-top;overflow:visible;display:inline-block;width:1px;height:1px;">
        <div style="width:1000px;;height:1px;background:red;"></div>
    </div>
    <span>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello </span>
    <div style="vertical-align:text-bottom;line-height:70px;width:100px;height:150px;background-color:aqua;display:inline-block">1</div>
    <div style="vertical-align:top;line-height:70px;width:100px;height:50px;background-color:aqua;display:inline-block">1</div>
    <div style="vertical-align:base-line;line-height:70px;width:100px;height:550px;background-color:plum;display:inline-block">1</div>




</div>
```
## 思考题：
* 我们如何写字？
## 本周作业：
## 参考名词：
* IFC：inline formatting context
* BFC：block formatting context
## Tips：
* 大家请记住下面这个表现原则：如果一个元素具有 BFC，内部子元素再怎么翻江倒海、翻云覆雨，都不会影响外部的元素。所以，BFC 元素是不可能发生 margin 重叠的，因为 margin 重叠是会影响外部的元素的；BFC 元素也可以用来清除浮动的影响，因为如果不清除，子元素浮动则父元素高度塌陷，必然会影响后面元素布局和定位，这显然有违 BFC 元素的子元素不会影响外部元素的设定。
* block-level 表示可以被放入 bfc
* block-container 表示可以容纳 bfc
* block-box = block-level + block-container
* block-box 如果 overflow 是 visible， 那么就跟父 bfc 合并

[Comparing Block](http://www.plccenter.cn/Siemens_Step7/bas00235.htm)
