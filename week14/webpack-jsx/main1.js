
function create(Cls, attributes, ...children){
    
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

class Text {
  constructor(text){
      this.children = [];
      this.root = document.createTextNode(text);
  }
  mountTo(parent){
      parent.appendChild(this.root);
  }
}

class Wrapper{
  constructor(type){
      this.children = [];
      this.root = document.createElement(type);
      console.log(this.root)
  }

  setAttribute(name, value) { //attribute
      this.root.setAttribute(name, value);
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
}

class Carousel {
  constructor(){
    this.root = null;
    this.data = null;
  }

  setAttribute(name, value) { //attribute
      this[name] = value;
  }

  render(){
    let children = this.data.map(url => {
      let ele = <img src={url} />;
      ele.addEventListener("dragstart", event => event.preventDefault());
      return ele;
    })
    let position = 0;
      let nextPic = () => {
        let nextPosition = (position + 1) % this.data.length;
        let current = children[position];
        let next = children[nextPosition];

        current.style.transition = 'ease 0s';
        next.style.transition = 'ease 0s';
        
        current.style.transform = `translateX(${-100 * position}%)`;
        next.style.transform = `translateX(${100 -100 * nextPosition}%)`;
        // requestAnimationFrame(function(){
        //   requestAnimationFrame(function(){

        //   })
        // })]

        setTimeout(function(){
          current.style.transition = 'ease 0.5s';
          next.style.transition = 'ease 0.5s';
          
          current.style.transform = `translateX(${-100 -100 * position}%)`;
          next.style.transform = `translateX(${-100 * nextPosition}%)`;
          position = nextPosition;
        }, 16)
        // setTimeout(nextPic, 3000)
      }
      nextPic()
    return (
      <div class="carousel">
        {children}
      </div>
    )
  }

  mountTo(parent){
    const re = this.render();
    console.log(re)
    re.mountTo(parent)
    let position = 0;
    re.addEventListener('mousedown', (e) => {
      console.log(e.path[1].childNodes)
      let startX = e.clientX;

      let nextPosition = (position + 1) % this.data.length;
      let lastPosition = (position - 1 + this.data.length) % this.data.length;

      let current = e.path[1].childNodes[position];
      let next = e.path[1].childNodes[nextPosition];
      let last = e.path[1].childNodes[lastPosition];

      current.style.transition = 'ease 0s';
      next.style.transition = 'ease 0s';
      last.style.transition = 'ease 0s';


      current.style.transform = `translateX(${-500 * position}px)`
      next.style.transform = `translateX(${-500 -500 * nextPosition}px)`
      last.style.transform = `translateX(${500 -500 * lastPosition}px)`
      
      let move = (e) => {
        current.style.transform = `translateX(${e.clientX - startX -500 * position}px)`
        next.style.transform = `translateX(${e.clientX - startX - 500 -500 * nextPosition}px)`
        last.style.transform = `translateX(${e.clientX - startX + 500 -500 * lastPosition}px)`
      };
      let up = (e) => {
        let offset = 0;
        if (e.clientX - startX > 250) {
          offset = 1;
        } else if (e.clientX - startX < -250) {
          offset = -1;
        }

        current.style.transition = 'ease 0s';
        next.style.transition = 'ease 0s';
        last.style.transition = 'ease 0s';

        current.style.transform = `translateX(${offset * 500 -500 * position}px)`
        next.style.transform = `translateX(${offset * 500 - 500 -500 * nextPosition}px)`
        last.style.transform = `translateX(${offset * 500 + 500 -500 * lastPosition}px)`

        position = (position + offset + this.data.length) % this.data.length;

        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }
      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    })
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
  

component.mountTo(document.body);

//componet.setAttribute("id", "a");