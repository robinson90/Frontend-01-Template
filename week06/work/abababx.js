function find (string) {
  let state = start;
  for (let c of string) {
    if (state === end) {
      return true
    }
    state = state(c)
  }
  return state === end
}

function start (c) {
  switch(c){
    case 'a': return findA1;
    default: return start;
  }
}

function findA1(c) {
  switch(c){
    case 'b': return findB1;
    default: return start(c);
  }
}

function findB1(c) {
  switch(c){
    case 'a': return findA2;
    default: return start(c);
  }
}

function findA2(c) {
  switch(c){
    case 'b': return findB2;
    default: return start(c);
  }
}

function findB2(c) {
  switch(c){
    case 'a': return findA3;
    default: return findB1(c);
  }
}

function findA3(c) {
  switch(c){
    case 'b': return findB3;
    default: return start(c);
  }
}

function findB3(c) {
  switch(c){
    case 'x': return end;
    default: return findB2(c);
  }
}

function end (c) {
  return end;
}

console.log(find('I abababx'));

console.log(find('I abbabx'));

console.log(find('I aabababx'));

console.log(find('I aabababababx'));
