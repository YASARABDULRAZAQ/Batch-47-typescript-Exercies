/*Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

*/
// Function to creat a fruit object
function creatfruit(name:string, color: string,
taste: string){
return {
    name,
    color,
    taste, 
};
}
// creat an array of frouits
const fruits=[
    creatfruit("Apple", "Red","Sweet"),
    creatfruit("Banana","Yallow","Sweet"),
    creatfruit("Orange","Orange","Citrusy"),
    creatfruit("Grapes","Purole/Green","Sweet"),
    creatfruit("Strawberry","Red","Sweet"),
]
// Access an invalid index
const invalidindex=10;
//There are only 5 element in array, so this will cause an error
console.log (`fruit at index ${invalidindex}:`)
fruits[invalidindex];
//print the fruits
fruits.forEach((fruit)=>{
    console.log (`Name:${fruit.name}, color${fruit.color},
     Taste: ${fruit .taste}`);
});
export{}


