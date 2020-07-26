import { TimeLine, Animation } from '../animation.js'
import { cubicBezier } from '../cubicBezier.js'
import { create } from '../main1'

const ease = cubicBezier(.25,.1,.25,1)
const linear =  v => v;

export class Carousel {
  constructor(){
    this.root = null;
    this.data = null;
    this.tl = new TimeLine();
  }

  setAttribute(name, value) { //attribute
      this[name] = value;
  }

  render(){
    let position = 0;
    this.tl.start();
    let nextPickStopHander = null;

    let children = this.data.map(url => {

      let nextPosition = (position + 1) % this.data.length;
      let lastPosition = (position - 1 + this.data.length) % this.data.length;

      let offset = 0;

      const onStart = () => {
        console.log('start')
        this.tl.pause();
        console.log('this.tl.pause')
        clearTimeout(nextPickStopHander)
      }

      const onPan = e => {
        console.log('onPan')
      }

      const onPanend = e => {
        nextPickStopHander = setTimeout(nextPic, 3000)
        console.log('onPanend')
      }

      const onEnd = () => {
        nextPickStopHander = setTimeout(nextPic, 3000)
      }

      let ele = <img src={url} onStart={onStart} onPan={onPan} onPanend={onPanend} onEnd={onEnd} enableGesture={true} />;
      ele.addEventListener("dragstart", event => event.preventDefault());
      ele.style.transform = 'translateX(0px)'
      return ele;
    })
    
      let nextPic = () => {
        // this.tl.reset();
        // this.tl.start();
        let nextPosition = (position + 1) % this.data.length;
        let current = children[position];
        let next = children[nextPosition];

        let curAnimation = new Animation({
          object: current.style,
          property: 'transform',
          template: v => `translateX(${v}%)`,
          start: -100 * position,
          end: -100 -100 * position,
          duration: 5000, 
          delay: 0,
          timingFunction: ease,
        })

        let nextAnimation = new Animation({
          object: next.style,
          property: 'transform',
          template: v => `translateX(${v}%)`,
          start: 100 -100 * nextPosition,
          end: -100 * nextPosition,
          duration: 5000, 
          delay: 0,
          timingFunction: ease,
        })
        this.tl.add(curAnimation)
        this.tl.add(nextAnimation)
        position = nextPosition;
        // current.style.transform = `translateX(${-100 * position}%)`;
        // next.style.transform = `translateX(${100 -100 * nextPosition}%)`;
        // requestAnimationFrame(function(){
        //   requestAnimationFrame(function(){

        //   })
        // })]

        // setTimeout(function(){
        //   current.style.transition = 'ease 0.5s';
        //   next.style.transition = 'ease 0.5s';
          
        //   current.style.transform = `translateX(${-100 -100 * position}%)`;
        //   next.style.transform = `translateX(${-100 * nextPosition}%)`;
        //   position = nextPosition;
        // }, 16)
        nextPickStopHander = setTimeout(nextPic, 3000)
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
    // console.log(re)
    re.mountTo(parent)
    let position = 0;
    // re.addEventListener('mousedown', (e) => {
    //   // console.log(e.path[1].childNodes)
    //   let startX = e.clientX;

    //   let nextPosition = (position + 1) % this.data.length;
    //   let lastPosition = (position - 1 + this.data.length) % this.data.length;

    //   let current = e.path[1].childNodes[position];
    //   let next = e.path[1].childNodes[nextPosition];
    //   let last = e.path[1].childNodes[lastPosition];

    //   current.style.transition = 'ease 0s';
    //   next.style.transition = 'ease 0s';
    //   last.style.transition = 'ease 0s';


    //   current.style.transform = `translateX(${-500 * position}px)`
    //   next.style.transform = `translateX(${-500 -500 * nextPosition}px)`
    //   last.style.transform = `translateX(${500 -500 * lastPosition}px)`
      
    //   let move = (e) => {
    //     current.style.transform = `translateX(${e.clientX - startX -500 * position}px)`
    //     next.style.transform = `translateX(${e.clientX - startX - 500 -500 * nextPosition}px)`
    //     last.style.transform = `translateX(${e.clientX - startX + 500 -500 * lastPosition}px)`
    //   };
    //   let up = (e) => {
    //     let offset = 0;
    //     if (e.clientX - startX > 250) {
    //       offset = 1;
    //     } else if (e.clientX - startX < -250) {
    //       offset = -1;
    //     }

    //     current.style.transition = 'ease 0s';
    //     next.style.transition = 'ease 0s';
    //     last.style.transition = 'ease 0s';

    //     current.style.transform = `translateX(${offset * 500 -500 * position}px)`
    //     next.style.transform = `translateX(${offset * 500 - 500 -500 * nextPosition}px)`
    //     last.style.transform = `translateX(${offset * 500 + 500 -500 * lastPosition}px)`

    //     position = (position + offset + this.data.length) % this.data.length;

    //     document.removeEventListener('mousemove', move)
    //     document.removeEventListener('mouseup', up)
    //   }
    //   document.addEventListener('mousemove', move)
    //   document.addEventListener('mouseup', up)
    // })
  }
}
