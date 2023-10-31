/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
// part No1:

 //step one (runs the if bllock)
 console.log(`1st version where align color is green`)
let alien_color: string ='Green';

if(alien_color==='Green'){
    console.log("Congratulation! you just earned 5 points.");
}
 else if(alien_color==='yellow'){
    console.log("Congratulation! you just earned 10 points.");
 }
 else if(alien_color==='red'){
    console.log("Congratulation! you just earned 15 points.");
 } else {
    console.log('Unknown alien color.');

 }


//part number two
console.log("second verson where align color is yellow")
alien_color='yellow'
if(alien_color==='green')
{
    console.log('Cangratulations!you just earned 5 points.');
}
else if (alien_color==='yellow')
{
    console.log("Congratulation! you just earned 10 points.");
}
    else if(alien_color==='red')
    
{

     console.log('Congratulation! you just earned 15 points.')
} 
else {
    console.log('Unknown alien color.');
}
//part number three
//part number two
console.log("third  verson where align color is red")
alien_color='red'
if(alien_color==='green')
{
    console.log('Cangratulations!you just earned 5 points.');
}
else if (alien_color==='yellow')
{
    console.log("Congratulation! you just earned 10 points.");
}
    else if(alien_color==='red')
    
{

     console.log('Congratulation! you just earned 15 points.')
} 
else {
    console.log('Unknown alien color.');
}