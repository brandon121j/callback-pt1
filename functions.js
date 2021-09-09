const identity = function (value) {
  return value;
};
const first = function (array, n) {
  let answer = [];
  if (n === undefined) {return array[0]}
  else if (n === 0) {return []}
  else if (n > array.length) {
    return array;
  }
  else if (n > 0) {
    for (i = 0; i < n; i++) {
      answer.push(array[i]);
    }
    return answer
  }
};

const last = function (array, n) {
  let answer = [];
  if (n > array.length) {return array}
  else if (n === undefined) {return array[array.length - 1]}
  else if (n === 0) {return []}
  else if (n > 0) {
    for (i = 0; i < n; i--) {
      answer.push(array[i])
    }
    return answer
  }
};

const each = function (collection, callback) {

  // for (const iterator in collection) {  
  //   isNaN(iterator) ? callback(collection[iterator], (iterator), collection) : callback(collection[iterator], +(iterator), collection);
  // }

  // for (i = 0; i < collection.length; i++) {
  //   callback([collection[i], i, collection])
  // }

  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i , collection);
    }
  }
  else {
    for (let iterator in collection) {
      callback(collection[iterator], (iterator), collection);
    }
  }

};



const indexOf = function (array, target) {
  let answer = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      answer = i;
      break;
    } 
  }

  return answer
};


const map = function (collection, iterator) {
  let answer = [];
  for (let i = 0; i < collection.length; i++) {
    answer.push(iterator(collection[i]))
    console.log(answer)
  }
return answer
};

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
};
