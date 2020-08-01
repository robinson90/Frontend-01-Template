let css = require('css')

module.exports = function(source, map) {
  let styleSheet = css.parse(source);
  let name = this.resourcePath.match(/([^\\]+).css$/)[1].replace(/[\S]/, val => val.toLowerCase());
  console.log('name', name)
  for(let rule of styleSheet.stylesheet.rules) {
    rule.selectors = rule.selectors.map(val => val.match(new RegExp(`^.${name}`)) ? val : `.${name} ${val}`)
  }
  console.log(JSON.stringify(css.stringify(styleSheet)))
  console.log('----------------my loader end -------------------->')
  let r = `
let style = document.createElement('style');
style.innerHTML = ${JSON.stringify(css.stringify(styleSheet))};
document.getElementsByTagName('head')[0].appendChild(style)`
  return r;
}

