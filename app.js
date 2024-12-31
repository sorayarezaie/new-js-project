const person ={
    fname:"Soraya";
    lname:"Rezaie";
    Age:20;
    reading : function () {
        console.log("reading");
    },
};
function person (fname, lname,age){
    this.fname = fname;
    this.lnmae = lname;
    this.age= age;
}
person.prototype.reading = function (){}
    const person1 = new person ("Soraya", "Rezaie", 20);
    const person2 = new person ("Sakina", "Rezaie",18);
    console.log(person1.fname);
    console.log(person2.lname);


let {fname, lname, age, gender}= person;

console.log(fname);
console.log(lname);