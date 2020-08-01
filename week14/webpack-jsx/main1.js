
import{ Carousel } from './component/Carousel'
import { enableGesture } from './lib/gesture';
import { Panel } from './component/Panel'
import { TabPanel } from './component/TabPanel'
import { ListView } from './component/ListView'

export function create(Cls, attributes, ...children){
    
  let o;

  if(typeof Cls === "string") {
      o = new Wrapper(Cls);
  } else {
      o = new Cls({
          timer: {}
      });
  }
  for(let name in attributes) {
      o.setAttribute(name, attributes[name]);
  }

  let visit = function (children) {
    for(let child of children) {
      if(typeof child === "object" && child instanceof Array) {
        visit(child);
        continue;
      }
      if(typeof child === "string") {
        child = new Text(child);
      }
      o.appendChild(child);
    }
  }

  visit(children)
  return o;
}

export class Text {
  constructor(text){
      this.children = [];
      this.root = document.createTextNode(text);
  }
  mountTo(parent){
      parent.appendChild(this.root);
  }
  getAttribute(name) { //attribute
    return '';
  }
}

class Wrapper{
  constructor(type){
      this.children = [];
      this.root = document.createElement(type);
      // console.log(this.root)
  }

  setAttribute(name, value) { //attribute
      this.root.setAttribute(name, value);
      if (name.match(/^on([\s\S]+)$/)) {
        const eventName = RegExp.$1.replace(/[\s\S]/,v => v.toLowerCase())
        this.addEventListener(eventName,value)
      }
      if (name === 'enableGesture') {
        enableGesture(this.root)
      }
  }

  getAttribute(name) { //attribute
    return this.root.getAttribute(name);
  }

  appendChild(child){
      this.children.push(child);
  }
  addEventListener(...val){
    this.root.addEventListener(...val)
  }

  mountTo(parent){
      parent.appendChild(this.root);

      for(let child of this.children){
          child.mountTo(this.root);
      }
  }
  get style() {
    return this.root.style;
  }
  get classList () {
    return this.root.classList;
  }
  set innerText(text) {
    return this.root.innerText = text;
  }
}

/*let component = <div id="a" cls="b" style="width:100px;height:100px;background-color:lightgreen">
      <div></div>
      <p></p>
      <div></div>
      <div></div>
  </div>*/

let component = <Carousel
data={[
  "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
  "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
  "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
  "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
]}
></Carousel>

let pannl = <Panel
title={'my panel'}
>
  <span>this is content1</span>
  <span>this is content2</span>
  <span>this is content3</span>
  <span>this is content4</span>
</Panel>

let tabPannl = <TabPanel
title={'my panel'}
>
  <span title="t1">this is content1</span>
  <span title="t2">this is content2</span>
  <span title="t3">this is content3</span>
  <span title="t4">this is content4</span>
</TabPanel>

let data=[
  {title: '1', url: "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg"},
  {title: '1', url: "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg"},
  {title: '1', url: "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg"},
  {title: '1', url: "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg"}
]
  
let listView = <ListView
  data={data}
  >
    {record => (
      <figure>
        <img src={record.url} />
        <figcaption>{record.title}</figcaption>
      </figure>
    )}
  </ListView>

// component.mountTo(document.body);
// pannl.mountTo(document.body);
tabPannl.mountTo(document.body);
// listView.mountTo(document.body);


//componet.setAttribute("id", "a");