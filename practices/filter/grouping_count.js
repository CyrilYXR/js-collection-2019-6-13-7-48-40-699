'use strict';

function grouping_count(collection) {

  var result={};
  //implement here
  collection.filter(number => {
    if(result[number]){
      result[number]++;
    } else {
      result[number]=1;
    }
  });
  return result;
}

module.exports = grouping_count;
