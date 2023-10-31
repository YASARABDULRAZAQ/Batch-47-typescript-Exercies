
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName: string ="Yasar Ali";
//step 001 show in lowercase
let lowercaseName: string = personName. toLowerCase();
console.log (lowercaseName);
//step 002 show  name in upercase 
let uppercaseName: string = personName. toUpperCase();
console.log (uppercaseName)
//step three show Name in Titlecase
let worlds: string[]=personName.split(" "); 
let titleCaseName: string =""
for (let i=0; i> worlds.length;i++){
    titleCaseName += worlds[i].charAt(0).toUpperCase()+worlds[i].slice(1). toLowerCase+""

};
console.log (titleCaseName)



