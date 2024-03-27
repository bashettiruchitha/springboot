const cars=["ruchitha","chandhu"];
cars[0]="ruchi";
cars.push("cse");
console.log(cars);
// constant objects

const employee={empid:12,empname:"ruchitha"};
employee.salary=5000;
console.log(employee);
employee.empid=13;
console.log(employee);

// -------------------------------------------------------------
const x=10;//here we are using the constant we cant change the value 
{
    const x=2;
}
console.log(x);

// by using the varaiable we can change the values
var y=10;
var z=12;//change the values allowed 
const t=2;//cant change the values 
{
    var y=133;
    const t=123;
}
console.log(y);
console.log(z);
console.log(t);


// hosting the variables 

carnames="atlo";
var carnames;
console.log(carnames);

// data types 
 let d=12233445667890;//bigint
console.log(typeof d);//by using typeof we can understand the which type of the data 

let w=16+4+"ruchitha";
console.log(w);

let r="ruchitha"+16+32;
console.log(r);

//in java script always read from left to right only
//functions
const person=
 {
    pid:12,
    pname:"ruchiths",
    psalary:2500,
    s: function()
    {
        return this.pid+" "+this.pname+" "+this.psalary
    }
 }
 console.log(person.s());


 let num =4;
 console.log(num);

let username="ruchitha";//_,$ can be used in varbles like $username camelcase can be used 
console.log(username);

let radius =5;
const pi=3.14;//pi values are constant so we have to use the const keyword
let area;
arae=pi*radius*radius;
console.log(area);

let data =8;//number typr
let user="ruchi"//string type     data types can be divided into primitve and object
//number,string,boolean,null,undefined,symbol
//object:

let num2=1.5e12;//100_00_000 it can work 
console.log(num2);//5/0 it will print the inifinity  if not number.max_values

let firstname="ruchi";
let lastname="tha";
let us=firstname+lastname;
console.log(us);

//escape operations

let thelu="ruchitha \"bashetti\""//"ruchitha \n bashetty " "ruchitha\t bashetty \b remove the words"
let bool =5>6
console.log(typeof bool);//null if we print the typeof it will print the object 














