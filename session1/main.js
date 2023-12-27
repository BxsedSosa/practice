//Using a for loop print all even numbers up to and including n. Dont include 0

function evenNum (num) {
  for (i=2;i <= num;i+=2) {
      console.log(i);
  }
}

evenNum(10);

console.log('-------------------------');

//Print sum of a number from 1 to n

function printSum (num) {
  for (i=1;i <= num; i++) {
      console.log(i);
  }
}
printSum(10);

console.log('-------------------------');

//write loop iterates from 0 to 15 that displays if the number and if its even or odd

function evenOdd (num) {
  for (i=0;i <= num; i++) {
      if (i % 2 === 0) {
          console.log(`${i} is even`);
      } else {
          console.log(`${i} is odd`);
      }
      }
  }

evenOdd(15);

console.log('-------------------------');

//write loop 1 to 100. if its a multiple of 3 write 'fizz'. if its multiple of 5 write 'buzz'
//if multiple of both then write 'fizzbuzz'

function fizzBuzz (num) {
  for (i=1;i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          console.log(`${i} = FizzBuzz`);
      } else if (i % 5 === 0) {
          console.log(`${i} = Buzz`);
      } else if (i % 3 === 0) {
          console.log(`${i} = Fizz`);
      }
  }
}

fizzBuzz(100);
