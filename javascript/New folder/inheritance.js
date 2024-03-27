let Person = function(name,gender, birthyear)
{
    this.name=name;
    this.gender=gender;
    this.birthyear=birthyear;
    // this.calage() = function(){
    //     let age= new Date().getFullYear() = this.birthyear;
    //     console.log(age);
    // }
}
Person.prototype.calage = function()
{
    let age= new Date().getFullYear()-this.birthyear;
    console.log(age);
};
Person.prototype.city ='london'


let john = new Person('ruchitha','female',2001);
// john.calage();
console.log(john+john.city);
console.log(john.hasOwnProperty('city'))//john has not own property 


let meery =new Person('merry','female',1999);
// meery.calage();
console.log(meery);

let mark={
    name:'mark',
    birthyear:1992,
    gender:'male'
}
console.log(mark.hasOwnProperty('name'));

let arr=[10,20,30];
