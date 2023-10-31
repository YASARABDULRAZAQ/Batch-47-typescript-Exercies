/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
//step1 array

const current_users: string[]=["Kmaran","Ali","Burhan","Asad","Asif,Ahmed"];
const new_users:string[]=["Asif","Kamran", "phull","Aisha","Ali"];
//step 2 function

function checkUserName(current_users:string[],new_users:string[]):void{
    const lowercasedCurrentUsers=current_users.map(user=>user.toLowerCase());

for (const newUser of new_users){
    const lowercasedNewUsers= newUser.toLowerCase();

   if (lowercasedCurrentUsers.includes(lowercasedNewUsers)){
    console.log(`Username"${newUser}" is already taken please enter a new username.`);
    
   }else{
    console.log(`Username"${newUser}"is available.`);
   }
}
}
