function match(str) { 
   // 当前状态
   let state = start 
   for (let c of str) { 
      state = state(c)
   }
   return state === end
} 
function start(c) { 
   if (c === 'a') {
      return foundA;
   } else { 
      return start 
   } 

} 

function end(c) { 
   return end 
}
function foundA(c) { 
   if (c === 'b') {
      return foundB
   } else { 
      return start 
   }
}
function foundB(c) { 
   if (c === 'c') {
      return foundC
   } else { 
      return start 
   }
}
function foundC(c) { 
   return end
}
console.log(match('i trgabc1cm groodas'))