function hello(){
    console.log("Samriddhi Shukla");
}

hello()

function avg(x,y){
    z = (x+y)/2;
    console.log(z);
}

avg(90,98.99)

function countVowels(str){
    let count = 0;
    for(const char of str){
        if (
            char==="a"||
            char==="e"||
            char==="i"||
            char==="o"||
            char==="u")
        
        {
            count++;
        }

    }
console.log(count);
}
 countVowels("aeiou");
// arrow function

const arrowmul=(a,b)=>{
    mul = a*b;
    console.log(mul);
}

arrowmul(90,90)

let a = [1,2,3,4];
a.forEach(function printVal(val){
   console.log(val);
})

a.forEach((val) =>  {
      console.log(val);
})


