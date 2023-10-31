/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
//step 1: creat an array to to stor travel distinations.

let travelDestinations: string[]=["tokyo","Paris","MadinaMunawara","Cayman","St maartin"]
//step2: print your array in its orignal order.

console.log ("orignal order:")
console.log (travelDestinations)
// stp3: print your array in alphabatical order without modifying the actual list .

console.log ("\n alphabatical order without modifying the actual list" )
console.log ([... travelDestinations].sort())
//step4: show that your array is still in its orignal order by printing at again.
console.log ("\n Show array is still in its orignal order")
console.log(travelDestinations)
//step 5: print your array in reverse alphabatical order without changing the order of the orignal list.
console.log("\n Reverse Alphabetical order without modifying the actual list")
console.log ([travelDestinations].sort().reverse())

//step6: show you that your array is still in its orignal order by printing it again

console.log ("\n show you that your array is still in its orignal order")
console.log (travelDestinations)
//step 7: Reverse the order of your list print the array to show that its order has changed.

console.log ("\n Reverse order")
travelDestinations.reverse()
console.log(travelDestinations)
//step 8: Reverse the order of your List again print the list to show it is back to its orignal order
console.log("\n Back to orignal")
console.log (travelDestinations)
//step 9:  sort your array .so it's stored in alphabetical ordere print the array to sbow that its order has been changed.

console.log ("\nChange to Alphabatical order")
travelDestinations.sort()
console.log(travelDestinations)
//step 10: sort to change your array so it's stored in reverse alphabetical order. print the list to show that its order has changed.

console.log ("\nChange to Reverse Alphabatical order")
travelDestinations. sort().reverse()
console.log(travelDestinations)