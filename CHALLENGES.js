'use strict';

////// CHALLENGE 1 //////

/*
// Data 1
let dogsJulia1 = [3, 5, 2, 12, 7];
let dogsKate1 = [4, 1, 15, 8, 3];

// Data 2
let dogsJulia2 = [9, 16, 6, 8, 3];
let dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = function (arrJulia, arrKate) {
  const correctJulia = arrJulia.slice(1, arrJulia.length - 2);
  //   console.log(correctJulia);
  const combinedDogs = correctJulia.concat(arrKate);
  //   console.log(combinedDogs);
  combinedDogs.forEach(function (age, dogNum) {
    if (age >= 3) {
      console.log(
        `Dog number ${dogNum + 1} is an adult, and is ${age} years old`
      );
    } else {
      console.log(`Dog number ${dogNum + 1} is still a puppy`);
    }
  });
};

console.log('---- DATA 1 ----');
checkDogs(dogsJulia1, dogsKate1);
console.log('---- DATA 2 ----');
checkDogs(dogsJulia2, dogsKate2);
*/

////// CHALLENGE 2 //////

/*
// Data 1
const dogs1 = [5, 2, 4, 1, 15, 8, 3];

// Data 2
const dogs2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  // console.log(ages);
  const humanAge = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  // console.log(humanAge);
  const over18 = humanAge.filter(age => age >= 18);
  // console.log(over18);
  const averageDogAge =
    over18.reduce((cur, age) => cur + age, 0) / over18.length;
  return averageDogAge;
};

const avg1 = calcAverageHumanAge(dogs1);
const avg2 = calcAverageHumanAge(dogs2);
console.log(avg1, avg2);
*/

////// CHALLENGE 3 //////

/*
// Data 1
const dogs1 = [5, 2, 4, 1, 15, 8, 3];

// Data 2
const dogs2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((cur, age, i, arr) => cur + age / arr.length, 0);
const avg1 = calcAverageHumanAge(dogs1);
const avg2 = calcAverageHumanAge(dogs2);
console.log(avg1, avg2);
*/

////// CHALLENGE 4 //////
/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : ' little'
  } `
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
// "Matilda and Alice and Bob's dogs eat too much!"
// "Sarah and John and Michael's dogs eat too little!"";
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood == dog.recFood));

// 6.
console.log(
  dogs.some(
    dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);

// 7.
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.filter(checkEatingOkay));

// 8.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
*/
