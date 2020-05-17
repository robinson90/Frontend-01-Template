
const css = require('css')

let rules = [];

let parentList = []

function parentCompute(children) {
  if (children.parent && children.parent.type !== 'document') {
    parentList.push(children.parent);
    parentCompute(children.parent)
  }
}

function match (element, selector) {
  if (!selector || !element.attributes) {
    return false;
  }
  if (selector.charAt(0) === '#') {
    var attr = element.attributes.filter(attr => attr.name === 'id')[0];
    if (attr && attr.value === selector.replace('#', '')) {
      return true;
    }
  } else if (selector.charAt(0) === '.') {
    var attr = element.attributes.filter(attr => attr.name === 'class')[0];
    if (attr && attr.value.split(' ').includes(selector.replace('.', ''))) {
      return true;
    }
  } else if (element.tagName === selector) {
    return true;
  } else {
    return false;
  }
}

function specificity (selector) {
  const data = [0, 0, 0, 0];
  const selectorPart = selector.split(' ');
  for (let part of selectorPart) {
    if (part.includes('#')) {
      data[0] += 1;
       
    } else if (part.includes('.')) {
      data[1] += 1;
    } else {
      data[3] += 1;
    }
  }
  return data;
}

function compare (sp1, sp2) {
  let i = 0;
  while (i < sp1.length) {
    if (sp1[i] === sp2[i]) {
      i ++;
    } else {
      return sp1[i] - sp2[i]
    }
  }
}

function computeCSS (element) {
  parentList = []
  parentCompute(element)

  if (!element.computeStyle) {
    element.computeStyle = {};
  }
  for (let rule of rules) {
    const selectorParts = rule.selectors[0].split(' ').reverse();
    if (!match(element, selectorParts[0])) {
      continue;
    }
    let matched = false;
    let s = 1;
    for (let i = 0; i < parentList.length; i++) {
      if (s >= selectorParts.length) {
        matched = true;
        break;
      }
      if (match(parentList[i], selectorParts[s])) {
        s ++;
      }
    }
    if (s >= selectorParts.length) {
      matched = true;
    }
    if (matched) {
      const sp = specificity(rule.selectors[0])
      const {
        computeStyle,
      } = element;
      for (let declaration of rule.declarations) {
        if (!computeStyle[declaration.property]) {
          computeStyle[declaration.property] = {};
        }
        if (!computeStyle[declaration.property].specificity) {
          computeStyle[declaration.property].value = declaration.value;
          computeStyle[declaration.property].specificity = sp;
        } else if (compare(computeStyle[declaration.property].specificity, sp) < 0) {
          computeStyle[declaration.property].value = declaration.value;
          computeStyle[declaration.property].specificity = sp;
        }
        
      }
    }
  }
}

function addCSSRules (text) {
  const ast = css.parse(text);
  // console.log(JSON.stringify(ast, null, 2))
  rules.push(...ast.stylesheet.rules)
}

module.exports.computeCSS = computeCSS;

module.exports.addCSSRules = addCSSRules;
