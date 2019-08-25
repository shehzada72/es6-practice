
// ====> 1: CONST & LET
// const value = 5;
// let name = "Jones";
//
// if (value === 5){
//     value = 10;
//     console.log(name);
// }
//
// console.log(name);


// Scope of LET & VAR


// Real life example


// ====> 2: Template Strings

// let prac = 15;
// let verbal = 20;
//
// let name = "Ali Learning ReactJS, His marks in Practicle of React is " + prac + " And verbal is "+ verbal + " Total marks =" +  prac + verbal;
// let name2 = `Ali Learning ReactJS, His marks in Practicle of React is ${prac} And verbal is  ${verbal}  Total marks = ${sum(prac, verbal)}`;
//
// console.log(name2);
//
// function sum(val1, val2) {
//     return val1 + val2;
// }



// const names = ["Ali", "Waqar", "Saif"];
//
// console.log(`The name is ${names[Math.floor(Math.random() * names.length - 1) + 1]}`);



// ====> 3: forEach


// function callbackExample(name) {
//     console.log(name);
// }
//
// callbackExample('Fahad');
//
// const names = ["Ali", "Waqar", "Saif"];

// for (let i=0; i<names.length; i++){
//     console.log(names[i]);
// }


// names.forEach(function (name) {
//     console.log(name);
// });


// ====> 4: Map

// const numbers = [1,2,3,4,5,6];
//
// let processedArray = numbers.reduce(function (number, index, sum) {
//     return sum += number;
// }, 10);

// for (let i=0; i<numbers.length; i++){
//     let mult = numbers[i] * numbers[i];
//     processedArray.push(mult);
// }



// console.log(numbers);
// console.log(processedArray)





// ====> 5: Filter



// ====> 6: Find

// ====> 7: Reduce
//
// const current = [
//     {expense: 'Mouse', amount: 200},
//     {expense: 'Keyboard', amount: 100},
//     {expense: 'Speaker', amount: 200},
// ];
//
// const results = current.reduce(function (sum, expense) {
//   return sum + expense.amount;
// },0);
//
// console.log(results);
// ====> 8: For of


// ====> 9: Fat arrow function

// function sum(val1, val2 = 5) {
//     return val1 + val2;
// }
//
// const sum2 = (val1, val2) => val1 + val2;
//
// sum(4, 6);
// sum2(4, 6);


// ====> 11: Default function arguments

// const defaultArgsFunc = (...args) => console.log(args[1]);
//
//
// console.log(defaultArgsFunc(4, 5, 8));

// ====> 12: Rest Operator



// ====> 13: Spread operator

// const brands = ["Audi", "Honda"];
// const otherBrands = ["BMW", "Ford"];
//
// const newArray = brands.concat(otherBrands);
// newArray.push('other');
//
// console.log(newArray);
//
//
// const newArray2 = [...brands, ...otherBrands, 'other'];
// console.log(newArray2);


// ====> 15: Destructuring

const user = {
    name: "Francis",
    lastname: "Jones",
    age: 25
};

let {name, lastname, age} = user;

console.log(name);
console.log(lastname);
console.log(age);




