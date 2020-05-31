# 1. 浏览器工作原理 | CSS计算，排版,渲染，合成（二）
## 参考链接：
* https://www.runoob.com/w3cnote/flex-grammar.html
* https://github.com/spritejs/sprite-core/commit/8757b4d3888b4f237b1089e94e075ab58ca952a6#diff-677d382da9f8d81f61d50af24f937b32R32
* https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
* https://www.npmjs.com/package/images、

## 代码截图及答疑回放：
* 链接： https://pan.baidu.com/s/1Zk1rzj3rBQF0vBp9jbGFcA
* 提取码：r59y

[shader](https://en.wikipedia.org/wiki/Shader)

gaya??

# 2. 重学CSS | CSS基本语法,CSS基础机制（一）

## 参考链接：
* https://www.w3.org/TR/CSS21/grammar.html#q25.0
* https://www.w3.org/TR/css-syntax-3
* http://www.html-js.com/article/2402
## 小实验收集： https://www.w3.org/TR/?tag=css
参考名词：
![BFC](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context) ：块格式化上下文（Block Formatting Context，BFC） 是 Web 页面的可视 CSS 渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。
## 参考代码：
* 收集标准：
```
var lis = document.getElementById("container").children


var result = [];


for(let li of lis) {
    if(li.getAttribute('data-tag').match(/css/))
        result.push({
            name:li.children[1].innerText,
            url:li.children[1].children[0].href
        })
}
console.log(result)
```

* 收集 CSS 属性相关标准：
```
let iframe = document.createElement("iframe");
document.body.innerHTML = "";
document.body.appendChild(iframe);




function happen(element, event){
    return new Promise(function(resolve){
        let handler = () => {
            resolve();
            element.removeEventListener(event, handler);
        }
        element.addEventListener(event, handler);
    })
}




void async function(){
    for(let standard of standards) {
        iframe.src = standard.url;
        console.log(standard.name);
        await happen(iframe, "load");
    }
}();

```