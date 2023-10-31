/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/
//Array of magiccian's names
const magicianName:string[]=["Harry porter","David Comppefield", "Hemione Grager", 
"Professpr Albus Dunbledore", "Ron Weasley"];
function show_magicians(magicians:string[]):void
{
    for (const items of magicians){
        console.log(items);
    }
}
 //call the function tp show the magicion's names
 show_magicians(magicianName);
