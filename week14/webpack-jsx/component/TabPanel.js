import { create } from '../create'
export class TabPanel {
  constructor(){
    this.root = null;
    this.children = [];
    this.childViews = [];
    this.titleViews = [];
    this.state = Object.create(null);
  }

  setAttribute(name, value) { //attribute
      this[name] = value;
  }

  getAttribute(name) { //attribute
    return this[name];
  }

  appendChild(child){
    this.children.push(child);
  }

  show(i) {
    for(let child of this.childViews) {
      child.style.display = 'none';
    }
    for(let titleView of this.titleViews) {
      titleView.classList.remove('selected')
    }
    this.childViews[i].style.display = ''
    this.titleViews[i].classList.add('selected');
    // this.titleViews[i].innerText = this.children[i].title;
  }

  render(){
    this.childViews = this.children.map(val => (
      <div style="min-height: 300px; width: 300px">{val}</div>
    ))
    this.titleViews = this.children.map((val, i) => {
      console.log(val)
      return (
        <span
          onClick={() => this.show(i)}
          className="active"
          style="border: 1px solid white;padding: 0 10px;"
        >{val.getAttribute('title') || ''}</span>
      )
    })
    setTimeout(() => this.show(0), 16)
    return (
      <div class="tab-penel" style="border: 1px solid pink; width: 300px">
        <h1 style="background-color: pink; width: 300px;margin: 0px;">
          {this.titleViews}
        </h1>
        <div>
          {this.childViews}
        </div>
      </div>
    )
  }

  mountTo(parent){
    const re = this.render();
    re.mountTo(parent)
  }
}