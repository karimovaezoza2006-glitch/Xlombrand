//1-masala map yordamida ishlash
const arr = [1, 2, 3, 4, 5];
Array.prototype.myMap = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
console.log(arr.myMap(x => x * 2)); 



//2-masala filter methodi yordamida ishlash
const arr1 = [1, 2, 3, 4, 5];
Array.prototype.myFilter = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};
console.log(arr.myFilter(x => x > 2)); 


//3-masala some methodi yordamida masalani ishlash
const arr2 = [1, 2, 3, 4, 5];
Array.prototype.mySome = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};
console.log(arr2.mySome(x => x === 3)); 



//4-reduce methodi yordamida ishlash
const arr3 = [1, 2, 3, 4, 5];
Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};
console.log(arr3.myReduce((a, b) => a + b, 0));



//5-masala every methodi yordamida
const arr4 = [1, 2, 3, 4, 5];
Array.prototype.myEvery = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};
console.log(arr4.myEvery(x => x > 0));


//6-masala 
const arr5 = [1, 2, 3, 4, 5];
Array.prototype.myFind = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};
console.log(arr5.myFind(x => x === 4));