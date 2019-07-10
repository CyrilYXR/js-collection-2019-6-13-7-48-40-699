'use strict';
function map_to_even(collection){
  // return [2,4,6,8,10];
  var result=[];
  collection.map(function(v){
    result.push(v * 2);
  });
  return result;
}
module.exports = map_to_even;

let [arg1,arg2,...arg3] = [1, 2];
console.log(arg3);