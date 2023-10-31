
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

*/
//Test for equality and ineqality with string
const str1:string="Hello";
const str2:string="hello";
console.log(str1===str2); false
console.log(str1!==str2); true

//Test using the lower case function

const text1: string="Hello word"
const text2: string="hello word"
console.log(text1.toLowerCase() ===text2);//true
 //Numarical tests involvig equality and ineqality, greater then and lass then, greater than
//equal to, and less than oe equal to
const num1: number = 10;
const num2: number = 5;
console.log(num1 === num2);//false
console.log(num1!==num2); //true
console.log(num1>num2);//true
console.log(num1<num2);//false
console.log(num1>=num2);//true
console.log(num1<=num2);//false

// tests using "and"and "or" operators
const x: number =5;
const y: number =10;
const z: number =15;
console.log( x < y && y < z );//true,both conditions are true

console.log( x < y || y > z );//true,at least one condition is true
console.log(x>y&& y<z);
//false,both conditions are fals Test  Wheather an iteam is an array

const fruits:string[]= ['apple', 'banana','orange','grape']; 

console.log(fruits.includes('banana'));//true
console.log(fruits.includes('kiwi'));//false

//Test whether an item is not in an array

const colors: string[]=['red','green','blue','yellow'];

console.log(!colors.includes('purple'))//true
console.log(!colors.includes('green'));//false
