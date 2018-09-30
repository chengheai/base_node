'use strict';
// export

// export const
export const a = '100';

// export fun
export const dogSay = function(){
  console.log('wang wang');
} 

// export fun1
function catSay(){
  console.log('miao miao');
}
export { catSay };

// export default
const m = 100;
export default m;
// export default const m = 100;  //error