// const person ={
//     fname:"Soraya",
//     lname:"Rezaie",
//     Age:20,
//     gender : "female",
//     reading : function () {
//         console.log("reading");
//     },
// };
// function person (fname, lname,age){
//     this.fname = fname;
//     this.lnmae = lname;
//     this.age= age;
//     this.gender = female ;
// }
// person.prototype.reading = function (){}
//     const person1 = new person ("Soraya", "Rezaie", 20, female);
//     const person2 = new person ("Sakina", "Rezaie",18, female);
//     console.log(person1.fname);
//     console.log(person2.lname);
// let {fname, lname, age, gender}= person;
// console.log(fname);
// console.log(lname);
// function greeting(){
//     console.log("hello");
// }
// console.log(typeof greeting);





// let x = false;
// x ? console.log ("hello world"): console.log("goodbye");
// structure of if:
// if (condition){
//     statements
// }
// else if (codition){
// }
// else{
//     statements
// }
// if (true){
//     console.log("hello world");
// }





// let x = 0;
// if (x==0){
//     console.log("zero");
// }
// else if (x%2 ==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }




// let x =0;
// if (x == 0){
//     console.log("zero");
// }
// else if (x > 0){
//     console.log("positive");
// }
// else{
//     console.log("negative");
// }





//  let x = 13;
//  if (x == 0 ){
//     console.log("zero");
//  }else{
//     if (x % 2 == 0 ){
//         console.log("even");
//     }
//     else{
//         console.log("odd");
//     }
// }




// let score = 15;
// if(score>=60){
//     if(score>=90){
//         console.log("you are ellegible for scholership");
//     }else{
//         console.log("you are not ellegibale for scholership");
//     }
// }else{
//         console.log("you failed the exam");
//     }





// let day = 50;
// switch (day){
//     case 0 :
//         console.log("saterday");
//         break;
//         case 1:
//             console.log("sunday");
//             break;
//         case 2:
//             console.log("monday");
//             break;
//         case 3:
//             console.log("tuesday");
//             break;
//         case 4:
//             console.log("wednesday");
//             break;
//         case 5:
//             console.log("thursday");
//             break;
//         case 6:
//             console.log("friday");
//             break;

//         default:
//             console.log("invalid day"); 
// }




// let num = 1;
// while (num <= 10){
//     console.log(num);
//     num = num +1;
// }




// let num = 10;
// while (num >= 1){
//     console.log(num);
//     num = num -1;
// }




// let x = 2;
// while (x <= 20){
//     if (x % 2 == 0){
//         document.write(x + "<br>");
//     }
//     x++
// }



// let num = 20;
// while(num >= 1 ){
//     console.log(num);
//     num = num + 1;
// }




// const num = Math.floor(Math.random() * 100) +1;
// while(true) {
//     guess = parseInt(prompt ("gaess the number between 1 - 10"));
//     if (guess === num){
//         alert("you won a game");
//         break;
// }
// else if (guess > num){
//     alert ("too high, try again")
// }
// else if (guess < num){
//     alert ("too low , try again")
// }
// }




// const num = Math.floor(Math.random()* 100) +1;
// while(true){
//     guess = parseInt(prompt ("geass the number between 1 - 100"));
//     if (guess === num){
//         alert("you won a game");
//         break;
//     }
//     else if (guess > num){
//         alert ("too high, try again")
//     }
//     else if (guess < num){
//         alert ("too low, try again")
//     }
// }
 



let num = 100;
while (num >= 1){
    console.log(num);
    num = num + 1;
}

