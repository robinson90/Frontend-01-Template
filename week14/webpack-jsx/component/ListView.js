import { create } from '../create'
export class ListView {
  constructor(){
    this.root = null;
    this.children = [];
    this.childView = [];
    this.titleView = [];
    this.state = 1;
  }

  setAttribute(name, value) { //attribute
      this[name] = value;
  }

  getAttribute(name, value) { //attribute
    return this[name];
  }

  appendChild(child){
    this.children.push(child);
  }

  render(){
    let data = this.getAttribute('data')
    return (
      <div class="list-view" style="width: 300px">
        {data.map(this.children[0])}
      </div>
    )
  }

  mountTo(parent){
    const re = this.render();
    re.mountTo(parent)
  }
}