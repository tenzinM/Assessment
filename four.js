// given a number x, find out if it is prime number or not, use javascript and find out the difference between next prime number after X and X.

function isPrimeNumber(num) {
    // to check if num is less than 2 or not an integer
    if (num < 2 || !Number.isInteger(num)) {
      return false;
    }
  
    // to check for divisibility up to the square root of num
    const sqrtNum = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= sqrtNum; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function getNextPrimeNumber(num) {
    let nextNum = num + 1;
  
    while (!isPrimeNumber(nextNum)) {
      nextNum++;
    }
  
    return nextNum;
  }
  
  function getDifference(num) {
    const isPrime = isPrimeNumber(num);
    const nextPrime = isPrime ? getNextPrimeNumber(num) : num;
    return nextPrime - num;
  }
  
  const a=13;
  const isPrime = isPrimeNumber(a);
  const diff = getDifference(a);
  
  if(isPrime){
    console.log(`${a} is a prime number.`);  //OUTPUT: 13 is a prime number.
    console.log(`The difference between ${a} and the next prime number is ${diff}.`); //OUTPUT: The difference between 17 and the next prime number is 4.
  }
  else
  console.log(`${a} not a prime number.`);

// Here we have 2 function : isPrimeNumber and getNextPrimeNumber. isPrimeNumber takes a number as input and checks if it's a prime number. 
// It returns true if the number is prime and false otherwise. 
// getNextPrimeNumber takes a number as input and returns the next prime number after that number. 

// the third function getDifference function takes a number num as input and determines if it's a prime number using the isPrime function. 
// If it is, it finds the next prime number after num.
//  It then calculates the difference between num and nextPrime and returns it.
  