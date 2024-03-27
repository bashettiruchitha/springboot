//explicit conversion
let num = String(6);//convert to string
console.log(num,typeof num);

let num2= Number("123");
console.log(num2,typeof num2);

//type conversion
let x=8
console.log(x);
x=x+" " //type ope type  string +string concat
x=x-2;
console.log(x);//javascript it will change the according the operator
x=!x;
console.log(x);
console.log(Boolean(7));//all the numeber are true only the 0 is false 

//+ ,-,* ,/

let y= 3//1 false =0
let t=true;//1 false =0
let rs=y+t;
//y=y+2;
y += 2;
y++;
++y

console.log(rs)
console.log(y);

//realtional operator 

console.log(5>6);//>= <=
//for string
let p="Pen";
let q="Pencil";
console.log(p>q);

let q1="2";
let q2=1;
console.log(q1>q2);//== is used = is assignment operator
//javascript is lossely coupled 
//logical operator  AND & OR | NOT !
//functions
function greet()//defining a function
 {
    return "helloo"; //returing value 
    
}
let user2='navin'
let str=greet(user2);//calling a function and passing a value 

//function expression

let a1=5+6 //expression ---evaluate----assigned function is  a object
let add = function(num3,num4)
{
    return num3+num4
}
let su =add
let r=add(5,6);
console.log(r);

function gr(u)//local varaibel or inside thefunction
 {
    console.log(u1)
    return 'hello ${u}!!'
    
}
let u1='ruchitha';
// let st1=g(u);
// console.log(st1);


//arrow functions
let greet1 =() =>
{
    console.log("hellow world");
    return 1;
}
console.log(greet1('ruchitha'))

let add1=(n1,n2) => n1+n2
let r1=add(5,6);
console.log(r1);

