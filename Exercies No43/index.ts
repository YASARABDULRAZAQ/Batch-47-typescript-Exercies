/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/

// Array of magician's names
const magicianNames: string[]=["Harry porter","David copperfield","Hermione Granger", "professor Albus Dumbledore","Ron Weasley"];
function showMgicians(magicians: string[]): void{
    for(const magician of magicians){
        console.log(magician)
    
    }
}
function make_great(magicians: string[]): string[]{
    const greatMagicians:string[]= magicians.map(magician=>`the great ${magician}`);
    return greatMagicians;
}


// Modify the array to add "the Great "to each magician's name

const greatMagicianName: string[]=make_great(magicianNames);
//call the function to show the orignal magician's names

console.log("orignal magicians:")
showMgicians(magicianNames);
//call the function to show the great magicians's names

console.log ("\nGreat Magicians:")
showMgicians(greatMagicianName)