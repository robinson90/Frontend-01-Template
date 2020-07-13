function create(Cls, attributes, ...children) {
  let o = new Cls;

  console.log(attributes)

  for (let name in attributes){
    o[name] = attributes[name]
  }
  console.log(children)
  for (let child of children) {
    o.appendChild(child)
  }
  return o;
}

class Div {
  constructor(){
    this.children = [];
    this.root = document.createElement('div')
  }
  set class(v) {
    console.log("Div::class", v)
  }

  setAttribute(name, val) {
    console.log(name, val)
    this.root.setAttribute(name, val)
  }

  mountTo(parent) {
    parent.appendChild(this.root)
    for(let child of this.children) {
      child.mountTo(this.root)
    }
  }

  appendChild(child) {
    console.log('Div::child', child)
    this.children.push(child)
  }
}

// class Div {

// }

let component = <Div id="ghj" name="cls">
  {/* <Div>ghj</Div> */}
  <Div></Div>
  <Div></Div>
  <Div></Div>
</Div>

component.mountTo(document.body)

console.log(component)
console.log(document.body)