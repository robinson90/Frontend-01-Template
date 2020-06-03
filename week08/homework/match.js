var selectorObj = {};

let parent = {};

let cur = {
  val: '',
};

function emit (cur) {
  console.log(cur, selectorObj)
  switch (cur.type) {
    case 'descendant': {
      const ancestor = Object.assign({}, selectorObj)
      console.log(ancestor)
      selectorObj = {
        ancestor,
      }
      break;
    }
    case 'children': {
      const parentNode = Object.assign({}, selectorObj)
      selectorObj = {
        parentNode,
      };
      break;
    }
    case 'next': {
      selectorObj.previousElementSibling = {};
      selectorObj.previousElementSibling[cur.type] = cur.val;
      break;
    }
    case 'after': {
      selectorObj.before = {};
      selectorObj.before[cur.type] = cur.val;
      break;
    }
    default: {
      selectorObj[cur.type] = cur.val;
      break;
    }
  }
  // console.log('selectorObj', selectorObj)
}

function dealSelector(char, isEmit = false) {
  switch (char) {
    case ' ': {
      if (Object.keys(cur)[1] && cur.val !== '') {
        emit(cur)
        delete cur.type;
      }
      cur.val = '';
      cur.type = 'descendant'
      emit(cur)
      delete cur.type;
      break;
    }
    case '>': {
      if (Object.keys(cur)[1] && cur.val !== '') {
        emit(cur)
        delete cur.type;
      }
      cur.val = '';
      cur.type = 'children'
      break;
    }
    case '+': {
      if (Object.keys(cur)[1] && cur.val !== '') {
        emit(cur)
        delete cur.type;
      }
      cur.val = '';
      cur.type = 'next'
      break;
    }
    case '~': {
      if (Object.keys(cur)[1] && cur.val !== '') {
        emit(cur)
        delete cur.type;
      }
      cur.val = '';
      cur.type = 'after'
      break;
    }
    case ':': {
      if (Object.keys(cur)[1] && cur.val !== '') {
        emit(cur)
        delete cur.type;
      }
      cur.val = '';
      cur.type = 'pseudo'
      break;
    }
    case '.': {
      if (Object.keys(cur)[1] && cur.val !== '') {
        emit(cur)
        delete cur.type;
      }
      cur.val = '';
      cur.type = 'className';
      break;
    }
    case '#': {
      if (Object.keys(cur)[1] && cur.val !== '') {
        emit(cur)
        delete cur.type;
      }
      cur.val = '';
      cur.type = 'id'
      break;
    }
    case '[': {
      if (Object.keys(cur)[1] && cur.val !== '') {
        emit(cur)
        delete cur.type;
      }
      cur.val = '';
      cur.type = 'attributes'
      break;
    }
    case ']': {
      emit(cur)
      delete cur.type;
      break;
    }
    case '*': {
      cur.type = 'universal'
      cur.val = char;
      emit(cur)
      delete cur.type;
      break;
    }
    default: {
      if (cur.type) {
        cur.val += char
      } else {
        cur.type = 'tagName'
        cur.val += char;
      }
      if (isEmit) {
        emit(cur)
      }
      break;
    }
  }
}

function compare(selectorObj, element, isDescendant = false) {
  console.dir(element)
  let i = 0;
  for (let key of Object.keys(selectorObj)) {
    console.log(key)
    if (typeof(selectorObj[key]) !== 'object') {
      console.log(selectorObj[key])
      if (key === 'tagName') {
        if (selectorObj[key].toUpperCase() !== element[key]) {
          if (isDescendant && 'HTML' !== element.tagName) {
            return compare(selectorObj, element['parentNode'], true)
          }
          return false
        }
      } else if (selectorObj[key] !== element[key]) {
        if (isDescendant && 'HTML' !== element.tagName) {
          return compare(selectorObj, element['parentNode'], true)
        }
        return false
      }
    } else {
      i ++;
      if (key === 'ancestor') {
        return compare(selectorObj[key], element['parentNode'], true)
      } else {
        return compare(selectorObj[key], element[key])
      }
    }
  }
  if (i === 0) {
    return true;
  }
  if (isDescendant && 'HTML' !== element.tagName) {
    return compare(selectorObj, element['parentNode'], true)
  }
}

function match(selector, element) {
  console.dir(element)
  for(let i = 0; i < selector.length; i++) {
    dealSelector(selector[i], i === selector.length - 1)
  }
  console.log(selectorObj)
  console.log(compare(selectorObj, element))
}

match("body div #id.class", document.getElementById("id"));
// match("body #id.class", document.getElementById("id"));
// match("div #id.class", document.getElementById("id"));
// match("div>#id.class", document.getElementById("id"));
// match("div #id.class+p~span", document.getElementById("id"));
// match("div div>#id.class", document.getElementById("id"));
// match("div div>#id.class+p", document.getElementById("id"));
// match("div div>#id.class+p~span", document.getElementById("id"));