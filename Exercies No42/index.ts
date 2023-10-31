/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/

//Arry of maician's namse
const magicianNames:string[]=["Harry porter","David capperfield","Hermione Granger","Professor Albyus Dumledore","Ron Weasley"];
function showMagicians(magicians:string[]):void{
    for(const magician of magicians){
        console.log(magician)
    }
}
function make_Great(magicians:string[]):string[]{
    const greatMagicians: string[]=magicians.map(magician=>`the Great${magician}`)
return greatMagicians;
}
// Modify the array to add "the Great"to each magician's name
const greatMagicianNames:string[]=make_Great(magicianNames);
//call the function to show the orignal magicin's names
console.log("Orignal Magicians:")
showMagicians(greatMagicianNames);