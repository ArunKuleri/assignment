// const arr = [5, 8, 3, 10, 2, 7];

// function maxOfArray(a){
//     let max = a[0];
//     for(let i=1; i < a.length; i++){
//         if (a[i] > max){
//             max= a[i];
//         }
//     }
//     console.log(max);
// }
// maxOfArray(arr)


 


//  const s = "English"

//  function reverseString(str) {
//     let reversed ="";
//     for(let i= str.length -1; i>=0; i--){
//         reversed+=str[i];
//     }
//     console.log(reversed);
// }
// reverseString(s);

//  const a = [5, 8, 3, 10, 2, 7]
// function arrayInAccending(arr){
//     let temp;
//     for(let i =0; i< arr.length;i++){
//         for (let j=1+1; j < arr.length; j++){
//             temp = arr[i];
//             arr[i]= arr[j];
//             arr[j]= temp;

//         }
//     }
//     console.log(arr)

    
// }
// arrayInAccending(a)


// const num=10;

// function summOfEven(n){
//     let sum =0;
//     for(let i=2; i<=n; i+=2){
//         sum +=i;

//     }
//     console.log(sum)
// }
// summOfEven(num)


// function isPrime(num) {
//     if (num<=1){
//         return false;
//     }
//     for(let i=2; i<=num / 2;i++){
//         if (num % i==0){
//             return false;
//         }
//     }
//     return true;
// }
 
// let num =17;
// let result = isPrime(num);
// console.log(result);


// function findSecondLargest(arr){
//     let largest = arr[0];
//     let secondLargest = arr[0];
    
//     for(let i= 1;i<arr.length; i++){
//         if(arr[i]> largest){
//             secondLargest= largest;
//             largest =arr[i];

//         }else if(arr[i]> secondLargest && arr[i] !== largest){
//             secondLargest =arr[i];

//         }
//     }
//     return secondLargest;

// }
// let arr =[15,12,18,23,19,11];
// let secondLargest = findSecondLargest(arr);
// console.log(secondLargest)



// function removeDuplicates(arr) {
//     let uniqueArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       let duplicate = false;
//       for (let j = 0; j < uniqueArr.length; j++) {
//         if (arr[i] === uniqueArr[j]) {
//           duplicate = true;
//           break;
//         }
//       }
//       if (!duplicate) {
//         uniqueArr.push(arr[i]);
//       }
//     }
//     return uniqueArr;
//   }

//   let arr = [1, 2, 3, 2, 1, 4, 5, 4];
// let uniqueArr = removeDuplicates(arr);
// console.log(uniqueArr);



// function getPrime(max){

//     const prime =[];
//     for(let num =2; num <=max; num++){

//         let isPrime = true;

//         for (let i=2; i <= Math.sqrt(num);i++){
//             if (num%i===0){
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime){
//             prime.push(num)
//         }
//     }
//    return prime;
   


// }
// console.log(getPrime(30))



// function findMaxAndMin(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       } else if (arr[i] < min) {
//         min = arr[i];
//       }
//     }
//     return [max, min];
//   }
  
//   // Example usage
//   const arr = [74, 33, 78, 80, 22, 45, 94];
//   const [max, min] = findMaxAndMin(arr);
//   console.log("Maximum element:", max);
//   console.log("Minimum element:", min);
  




// function Sort(arr) {
//     const n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//       for (let j = 0; j < n - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//     return arr;
//   }

//   const arr = [64, 34, 25, 12, 22, 11, 90];
// console.log(Sort(arr))
  

// function fibonacci(n) {
//     let a = 0, b = 1, temp;
//     console.log(a);
//     console.log(b);
//     for (let i = 2; i < n; i++) {
//       temp = b;
//       b = a + b;
//       a = temp;
//       console.log(b);
//     }
//   }
//   fibonacci(10);


// function sumOfPrimes(limit) {
//     let sum = 0;
//     for (let num = 2; num <= limit; num++) {
//       let isPrime = true;
//       for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//           isPrime = false;
//           break;
//         }
//       }
//       if (isPrime) {
//         sum += num;
//       }
//     }
//     return sum;
//   }


//   function sumOfMultiples(num) {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//       if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//       }
//     }
//     return sum;
//   }
//   console.log(sumOfMultiples(10));




// const number = prompt("Enter a number: ");


// if(number % 2 == 0) {
//     console.log("The number is even.");
// }




// else {git 
//     console.log("The number is odd.");
// }


// function union_arrays (x, y) {
//     var obj = {};
//     for (var i = x.length-1; i >= 0; -- i)
//        obj[x[i]] = x[i];
//     for (var i = y.length-1; i >= 0; -- i)
//        obj[y[i]] = y[i];
//     var res = []
//     for (var k in obj) {
//       if (obj.hasOwnProperty(k))  
//         res.push(obj[k]);
//     }
//     return res;
//   }
  
//   console.log(union_arrays([34,35,45,48,49], [44,55]));
 

// var n = 2568, remainder, sumOfDigits = 0;
// while(n)
// {
//     remainder = n % 10;
//     sumOfDigits = sumOfDigits + remainder;
//     n = Math.floor(n/10);
// }
// console.log(sumOfDigits);




function countVowel(str) { 

   
    const count = str.match(/[aeiou]/gi).length;


    return count;
}


const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);