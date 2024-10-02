const ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

const adults = ages.filter(checkAdult);
console.log("Adults:", adults);

const words1 = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const longWords5 = words1.filter(function (words1) {
  return words1.length > 6;
});

console.log("Long words:", longWords5);

function isBigEnough(value) {
    return value >= 10;
  }
  
  const filteredNumbers = [12, 5, 8, 130, 44].filter(isBigEnough);
  console.log("Filtered numbers:", filteredNumbers);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log("Even numbers:", evenNumbers);

function isPalindrome(word) {
    return word === word.split('').reverse().join('');
  }
  
  const words2 = ['level', 'hello', 'radar', 'world', 'racecar'];
  
  const palindromes1 = words2.filter(isPalindrome);
  console.log("Palindromes:", palindromes1);

  function isPalindrome(word) {
    return word === word.split('').reverse().join('');
  }

  const words3 = ['level', 'hello', 'radar', 'world', 'racecar'];

  const palindromes = words3.filter(isPalindrome);

  console.log("Palindromes:", palindromes);

  const words = ['apple', 'banana', 'orange', 'pineapple', 'grape'];

  const filteredWords = words.filter(function (word) {
    return word.includes('apple');
  });
  
  console.log("Words containing 'apple':", filteredWords);

  const products = [
    { id: 1, name: 'Apple', price: 1.99 },
    { id: 2, name: 'Banana', price: 0.99 },
    { id: 3, name: 'Orange', price: 2.49 },
    { id: 4, name: 'Grape', price: 3.99 }
  ];
  
  const expensiveProducts = products.filter(function (product) {
    return product.price > 2.0;
  });
  
  console.log("Expensive products:", expensiveProducts);

  const values = [1, null, 2, undefined, 3, 4, null, 5, undefined];

const nonNullUndefinedValues = values.filter(function(value) {
  return value !== null && value !== undefined;
});

console.log("Non-null and non-undefined values:", nonNullUndefinedValues);

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers1 = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log("Even numbers:", evenNumbers1);