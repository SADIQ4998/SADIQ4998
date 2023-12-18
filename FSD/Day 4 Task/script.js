const numbers = [8, 19, 5, 6, 15, 3, 7, 14, 9, 13];

const odds = [];
numbers.forEach((num) => {
  if (num % 2 === 1) {
    odds.push(num);
  }
});

console.log(odds); // [19, 5, 9, 13]

//2)Convert all the strings to title caps in a string array//

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}
console.log(titleCase("its me jacksparrow"));

//3)Sum of all numbers in an array

let arr = [4, 8, 7, 13, 12]


let sum = 0;


for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log("Sum is " + sum) 

// 4 , Return all the prime numbers in an array

var a = [5, 9, 63, 29, 35, 6, 55, 23]
var prime = [];

function isPrime(item) {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { 
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime.push(a[index])
  }
}

console.log(prime);

// 5)Return all the palindromes in an array

const ar= ['mom', 'dad', 'abcde', 'racecar', 'momom'];

function namePalindrome(arr) {
  return arr.filter((curr, idx, arr) => {
    const splitArr = curr.split('');
    const reversedString = splitArr.reduceRight((prev, curr) => ( prev + curr ), '');
    if (curr === reversedString) return curr;
  })
}

namePalindrome(arr);


//6)Return median of two sorted arrays of the same size.


const median = (a1, a2) => {
  let x = a1.concat(a2);
  x.sort(function (a,b) {
    return a - b;
  });
  let len = x.length;

  return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];

}

let a = [0,2,3,5,9];
let b = [1,4];
console.log(median(a,b));


// Remove duplicates from an array


let a = ["apple", "mango", "apple",
          "orange", "mango", "mango"];

function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));


//Rotate an array by k times

function solution(A, K) {
  if (A.length === K || K === 0) {
      return A;
  }

  K = K % A.length;

  for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }

  return A;
}