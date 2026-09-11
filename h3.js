/* for of loop
for(let val of strVar){

}
Used for strings/Arrays */

let str = "Samriddhi Shukla";
for(let i of str){
    console.log("i=",i);
}

let h = "Neha and Lubba";
let size = 0;
for(let i of h){
    console.log("i=",i);
    size++;
}
console.log("Size=",size);

/*
for in loop

for(let key in objVar){

}

Used for objects and arrays(print keys)
*/

let student={
    name:"Samriddhi Shukla",
    age:20,
    cgpa:8.39
}
for (let key in student){
    console.log("key=",key ,"value=",student[key]);
}

//all even no.
for (i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

//game

let no = 50;
let user = prompt("Enter a guessed no:");
while(user!=no){
    user = prompt("You have guessed a wrong number.Guess again:");
}
console.log("Congratulation!!, You have guessed a right number.");

