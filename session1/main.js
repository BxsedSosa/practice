//Using a for loop print all even numbers up to and including n. Dont include 0

function even_num (num) {
  for (i=2;i <= num;i+=2) {
      console.log(i);
  }
}

even_num(10);

console.log('-------------------------');

//Print sum of a number from 1 to n

function print_sum (num) {
  for (i=1;i <= num; i++) {
      console.log(i);
  }
}
print_sum(10);

console.log('-------------------------');

//write loop iterates from 0 to 15 that displays if the number and if its even or odd

function even_odd (num) {
  for (i=0;i <= num; i++) {
      if (i % 2 === 0) {
          console.log(`${i} is even`);
      } else {
          console.log(`${i} is odd`);
      }
      }
  }

even_odd(15);

console.log('-------------------------');

//write loop 1 to 100. if its a multiple of 3 write 'fizz'. if its multiple of 5 write 'buzz'
//if multiple of both then write 'fizzbuzz'

function fizzbuzz (num) {
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

fizzbuzz(100);