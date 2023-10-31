//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favoritetransportation: Array<[transport: string brand: string]>
 favoritetransportation.push(["motercycle","Honda",])
 favoritetransportation.push(["car","Toyota",])
 favoritetransportation.push(["bicycle","Sohrab",])
 console.log ("favoritetransportation")
 // I would like to own a Honda motercycle using for each loop to print a series of statement.
 favoritetransportation. forEach([transport,brand])
 {
    console.log(`i would liked to own a${brand} motercycle`)
 }