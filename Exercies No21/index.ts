/*They think of something you could store in a Typesscript object.
 Writer a program that creates objects containing the iteams*/
 const bouquet=
{
    name: "Spring Delight",
    price:250,
    description:"Beautiful arrangement of spring flowers"
}
//define an array of objects
let bouquets: Array <typeof bouquet> =[];
//pushing multipul object 

bouquets.push(bouquet);
bouquets.push({
name:"summer bliss",
price:350,
description:"beautiful arrangmemnt of summer flowers"
}) 
let bouquet3=
{
    name: "Red Hot",
    price:350,
    description:"Beautiful arrangement of spring flowers"
} 
bouquets.push(bouquet3);
//console.log(bouquets);
bouquets.push({name: "Freshness",price:250,description: "Abeautiful  arrngment of wite a yellow roses"})
//console.log(bouquet);
//function to display bouquets

function displaybouquets(bouquets: Array<typeof bouquet>)
for( let i of bouquets) {
    console.log(`
    title:${i.name}
    discription:${i.description}
    price:${i.price}
    _________\n`);
}
