//getter and setter 
//accessor properities are methods that gets or sets the value 
//of an object property
//getter properities is used to get the values get keyword
//setters values is used to set the values set keyword
//why use this ?
//encapsulation - hide the data from outside world
//set cal value for a property

/*let j1 ={
    n2:'ruchitha',
    b2:1999,
    annualsalary:25000,
    
    get getName(){
        return 'ms'+this.n2;
    },

    set  setName(va)
    {
        if(va.length < 4)
        {
            alert('name should is minimum 4 characters');
        }else
        {
            this.n2=va;
        }
    }

}
console.log(j1.getName);
j1.setName="ru";
console.log(j1.getName)*/
// let User=class{
//     constructor(nn,pswd,role){
//         this.nn=nn;
//         this.pswd=pswd;
//         this.role=role;
//     }

//     set setpasswd(val){
//         if(val.length < 4){
//             console.log('paswd should be alteast 4 characters');
//         }else{
//             this.pswd=val;
//         }
//     }
// }
// let marr=new User('mark','psw','admin');
// console.log(marr);

// marr.setpasswd ='abc';

//-------------------------
//static methods
// class Person1 //in javascript empty constructor is created
// //this person class act as blue print we can create an object
// {
// constructor(name1,by,ge)
// {
//     this.name1=name1;
//     this.by=by;
//     this.ge=ge;

//     // this.calage = function(){
//     //     console.log(new Date().getFullYear()-this.by);
//     // }

// }
//  calage (){
//         console.log(new Date().getFullYear()-this.by);
//     }
//     static greet(){
//         console.log('hey how are you ');
//     }
// }
// let jerry=new Person1('herry',1990,'male');
// console.log(jerry);
// Person1.greet();

// Person1.method()

// ---------------static methods with functions
// let Person= function(name,gender,by1){
//     this.name=name;
//     this.gender=gender;
//     this.by1=by1;
// }
// Person.prototype.calage= function(){
//     let age=new Date().getFullYear()-this.by1;
//     console.log(age);
// };
// Person.greet=function(){
//     console.log('have a nice day ');
// }

// let mrr=new Person('mark','male',1997);
// console.log(mrr);
// mrr.calage();
// Person.greet();
// Number.parseInt()//static method
// Number.isNaN()
// Array.from();


// -----------------------------------------
let person = {
    claage()
    {
        return new Date().getFullYear().this.birthyear;
    },
    greet()
    {
        return 'have a nice day '
    }
}
let john=Object.create(person);
console.log(john)

console.log(john.claage());
