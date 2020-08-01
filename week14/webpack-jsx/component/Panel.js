import { create } from '../create'
export class Panel {
  constructor(){
    this.root = null;
    this.children = [];
    // window.xtl = this.tl;
  }

  setAttribute(name, value) { //attribute
      this[name] = value;
  }

  appendChild(child){
    this.children.push(child);
  }

  render(){
    return (
      <div class="penel" style="border: 1px solid pink; width: 300px">
        <h1 style="background-color: pink; width: 300px;margin: 0px;">{this.title}</h1>
        <div style="min-height: 300px; width: 300px">
          {this.children}
        </div>
      </div>
    )
  }

  mountTo(parent){
    const re = this.render();
    re.mountTo(parent)
  }
}