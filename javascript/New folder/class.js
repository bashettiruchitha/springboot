//two ways to create the class
//there are two waysto create a class
//1.class decalaartion
//2.class expresssion
// let Person1= class{

// }
class Person1 //in javascript empty constructor is created
//this person class act as blue print we can create an object
{
constructor(name1,by,ge)
{
    this.name1=name1;
    this.by=by;
    this.ge=ge;

    // this.calage = function(){
    //     console.log(new Date().getFullYear()-this.by);
    // }

}
 calage (){
        console.log(new Date().getFullYear()-this.by);
    }
}
Person1.prototype.greet = function(){
    console.log("good morning"+this.name1)
}
let j= new Person1("ruchith",2001,"f");
console.log(j)
j.calage();
j.greet();

let m= new Person1("ruchi",1999,"f");
console.log(m)
m.calage();
m.greet();

//1 class cannot be hoisted 
//2.classes are first class citizen
//3.classes are excuted instrict mode

