function match(str) { 
   let state = start;
   for (let c of str) { 
      state = start(c);
   }
   return state === end 
  
} 
function end(c) { 
   return end 
}
function start(c) { 
   if (c === 'a') {
      return foundA;
   } else { 
      return start;

   }
}

function foundA(c) { 
   if (c === 'b') {
      return foundB;
   } else { 
      return start;
   }

}
function foundB(c) { 
 return end
}


console.log(match('ab'))

