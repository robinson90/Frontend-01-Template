export class TimeLine {
  constructor() {
    this.animations = [];
    this.id = null;
    this.state = 'init';
  }

  tick() {
    let t = Date.now() - this.startTime;
    let animations = this.animations.filter(v => !v.finished)
    for(let animation of animations) {
      console.log('tick')
      let {
        object,
        property,
        start,
        end,
        duration,
        delay,
        template,
        timingFunction,
        addTime,
      } = animation;
      
      let pro = timingFunction((t - delay - addTime) / duration)
      if (t > duration + delay) {
        t = duration + delay;
        pro = 1;
        animation.finished = true;
        // continue;
      }
      const val = start + pro * (end - start)
      object[property] = template(val)
      // object[property] = template(timingFunction(start, end)(t - delay))
    }
    if (animations.length) {
      this.id = requestAnimationFrame(() => this.tick())
    }
  }
  start() {
    if (this.state !== 'init') {
      return;
    }
    this.state = 'playing';
    this.startTime = Date.now();
    this.tick();
  }
  reStart() {
    if (this.state !== 'playing') {
      this.pause();
    }
    
    this.animations = [];
    this.id = null;
    this.state = 'init';
    this.startTime = Date.now();
    this.pauseTime = null;
    this.tick();
  }
  pause() {
    if (this.state !== 'playing') {
      return;
    }
    this.state = 'paused';
    if (this.id !== null) {
      cancelAnimationFrame(this.id)
      this.pauseTime = Date.now();
    }
  }
  resume() {
    if (this.state !== 'paused') {
      return;
    }
    this.state = 'playing';
    this.startTime += Date.now() - this.pauseTime;
    console.log(this.startTime)
    this.tick();
  }
  add(animation, addTime) {
    animation.finished = false;
    if (this.state === 'playing') {
      animation.addTime = addTime !== void 0 ? addTime : Date.now() - addTime;
    } else {
      animation.addTime = addTime !== void 0 ? addTime : 0;
    }
    
    this.animations.push(animation)
  }
}

export class Animation {
  constructor(object, property, template, start, end, duration, delay, timingFunction) {
    this.object = object;
    this.property = property;
    this.template = template;
    this.start = start;
    this.end = end;
    this.duration = duration;
    this.delay = delay || 0;
    // this.timingFunction = timingFunction || ((start, end) => {
    //   return (t) => start + (t / duration)* (end - start)
    // });
    this.timingFunction = timingFunction;
  }
}