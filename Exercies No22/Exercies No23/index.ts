/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
let car= 'subaru';
console.log("Is car=='subaru'? i predict True.");
console.log( car =='subaru');//True

console.log("Is car== 'honda'? i predict False.");
console.log(car =='honda');//false

console.log("is car==='subaru'? i predict True.");
console.log( car =='subaru');//True

console.log("is car==='subaru'? i predict false.");
console.log( car ==='subaru');//false

console.log("is car ==!'toyota'? i predict True.");
console.log( car !=='toyota');//True

console.log("is car ==!'subaru'? i predict false.");
console.log( car !=='subaru');//false

console.log("is car =!'mazda'? i predict true.");
console.log( car ='mazda');//true

console.log("is car =!'subaru'? i predict false.");
console.log( car !='subaru');//false

let age=25;
console.log ("Is age> 18? I predict True.")
console.log(age>18);//True

console.log ("Is age< 21? I predict false.")
console.log(age<18);//false