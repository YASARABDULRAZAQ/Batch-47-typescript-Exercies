/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
//step informing people that found a bigger dinner table.
let guestList: Array<string>=[
    "Zia khan",
    "Jhnzab tayab",
    "Abid shirwani",
    "Yasar Ali",
    "Elon musk",
    "Quaid Azam",
];
for( let guest  of guestList){
    console.log(`Hello${guest},we found a bigger dinner table.`)
}
    //step2 Add a new guest to the begning of Array
    let newGuestAtBeginning: string="Ali Jnab"
    guestList.unshift(newGuestAtBeginning)
    console.log (guestList)
    //3rd step add one guest to the milddle of arry
    let newGustInMiddle:string="Imran khan"
    let middleindex: number=Math.floor(guestList.length/2)
guestList.splice(middleindex,0, newGustInMiddle)
console.log(guestList)
//4th step use append () to add new guest to the end of you list.
let newGuestAtEnd: String= "Rizwan Sab"
guestList.push(newGuestAtEnd)
//console.log(guestList)
//final step prient a new step of innvitation message
console.log("New set og invitation message:")
for(let guest of guestList){
    console.log (`Dear ${guest},you are innvited to dinner`)
}

