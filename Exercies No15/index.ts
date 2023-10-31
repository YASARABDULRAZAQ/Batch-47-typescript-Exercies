
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.
let guestList: Array<string>=[
    "Zia khan",
    "Jhnzab tayab",
    "Abid shirwani",
    "Yasar Ali",
    "Elon musk",
    "Quaid Azam",
];
//step one. print the name of person who can't make it.

let guestHowCantMakeit: string=  "Quaid Azam"
console.log (`${guestHowCantMakeit}can't make it Dinner`)

//Step2. Replace the name of gust who can make it.
let NewGust:string="Zia khan"
let indexOfguestHowCanMakeIt:number=guestList.indexOf
(guestHowCantMakeit)
//console.log (indexofguestHowCantMakeIt)

if (indexOfguestHowCanMakeIt!==1)
guestList[indexOfguestHowCanMakeIt]=NewGust
console.log(guestList[2])
//step 3 print a second set of invitation message 

console.log("second set of invitation message:")
guestList.forEach((guest:string)=>
{
    console.log(`Dear ${guest},you are invited to dinner`)
})
export{guestList}

