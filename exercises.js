//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  //code here
  var numMultiplyTen = num * 10;
  return numMultiplyTen;
}
multiplyByTen(10);

function subtractFive(num) {
  //return num after subtracting five
  //code here
  var numSubtractFive = num - 5;
  return numSubtractFive;
}
subtractFive(10);

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  //code here
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}
areSameLength('khiem', 'danny');

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  //code here
  if (x === y) {
    return true;
  } else {
    return false;
  }
}
areEqual('1', '1');

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  //code here
  if (num < 90) {
    return true;
  } else {
    return false;
  }
}
lessThanNinety(85);

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  //code here
  if (num > 50) {
    return true;
  } else {
    return false;
  }
}
greaterThanFifty(60);

function add(x, y) {
  //add x and y together and return the value
  //code here
  var newNumber = x + y;
  return newNumber;
}
add(1, 2);

function subtract(x, y) {
  //subtract y from x and return the value
  //code here
  var product = x - y;
  return product;
}
subtract(5, 3);

function divide(x, y) {
  //divide x by y and return the value
  //code here
  var productDivide = x / y;
  return productDivide;
}
divide(10, 2);

function multiply(x, y) {
  //multiply x by y and return the value
  //code here
  var productMultiply = x * y;
  return productMultiply;
}
multiply(5, 5);

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  //code here
  var productRemainder = x % y;
  return productRemainder;
}
getRemainder(12, 5);

function isEven(num) {
  //return true if num is even
  //otherwise return false
  //code here
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
isEven(4);

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  //code here
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}
isOdd(5);

function square(num) {
  //square num and return the new value
  //code here
  var productSquare = Math.pow(num, 2);
  return productSquare;
}
square(5);

function cube(num) {
  //cube num and return the new value
  //code here
  var productCube = Math.pow(num, 3);
  return productCube;
}
cube(3);

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  //code here
  var powerRaiseTo = Math.pow(num, exponent);
  return powerRaiseTo;
}
raiseToPower(5, 2);


function roundNumber(num) {
  //round num and return it
  //code here
  var numberRound = Math.round(num);
  return numberRound;
}
roundNumber(5.5);

function roundUp(num) {
  //round num up and return it
  //code here
  var numberRoundUp = Math.ceil(num);
  return numberRoundUp;
}
roundUp(7);

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
  var newWord = str + '!';
  return newWord;
}
addExclamationPoint('hello world');

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
  var fullName = firstName + ' ' + lastName;
  return fullName;
}
combineNames('Lambda', 'School');

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
  var greetingName = 'Hello' + ' ' + name + '!';
  return greetingName;
}
getGreeting('Khiem');

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  //code here
  var areaRectangle = length * width;
  return areaRectangle;
}
getRectangleArea(5, 5);

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  //code here
  var triangleArea = base * height / 2;
  return triangleArea;
}
getTriangleArea(5, 10);

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  //code here
  var circleArea = Math.PI * Math.pow(radius, 2);
  var circleAreaRounded = Math.round(circleArea);
  return circleAreaRounded;
}
getCircleArea(5);

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
  var rectangularPrismArea = (length * width * height);
  return rectangularPrismArea;
}
getRectangularPrismVolume(5, 6 , 7);

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
