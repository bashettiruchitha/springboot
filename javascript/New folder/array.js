// three types we can create 
// var a =[1,2,3]--literal
// instance  var student=[names====]
// var arrayname= new Array() a[0]="name",a[1]=" ----to store ;
// var arrayname = new Array(namesss); ---constructor
// array methods push,pop ,concat,filter method--it will return new array ,
// find method --to serach silce,reverse ,lastindexof
// shift method ---to shift the number it will ignore the index 0 it will print the index 2, sorting  method
// tostring ---array to string conversion,join method
// let values = new Array();//array constructor

let value=[5,7,8];
// value.push(5);
console.log(value)

//different types of arrays 
let name=['ruchi','tha','chirag',{tech:'js'},
function () {
    console.log("hello world");
    
}];

name[3]='ruchitha';
console.log(name)

let  data = [5,6,7,8];
// console.log(data.push(2));
// console.log(data.pop())//last element is removed
// console.log(data.shift());//it will remove from the first element 
// console.log(data.unshift(2)) //it will add in the begining 
// console.log(data.splice(2)); splice(2,2) indexofvalues,no of values
// console.log(data.slice(3))
// console.log(data)

//array in loops
//for of loop for in loop
let num=[];
num[0]=5;
num[99]=9;
// for(let n of num){
//     console.log(n);
// }

for(let key in num)
{
    console.log(num[key])//0 99  it will get on;ly key

}
// console.log(num.length)//100 

//array in destructor
// let numss=[5,7,2,4]
// // console.log(numss)
// let [a,b,c,d]=numss//we can give the space 
// console.log(d)
let a = 5;
let b = 6;
[a,b]=[b,a]//swapping two numbers
console.log(a,b);

let words="my name is ruchitha bashetty".split(' ');
let [a1,b1,...d]=words
console.log(d)
//array methods
let nums = [42,51,24,98,65]
// nums.forEach(n =>{ //by using forech it will print the value one by one
//     console.log(n*2)
// });
//arrays in maps
let t=nums.filter (n => n%2 === 0) //it will print only the n%2 
.map(n => n*2)//it will take the value and change the value 
.reduce((a2,b2) => a2+b2)
    // .forEach(n => {
    //     console.log(n);
    // })
    console.log(t)

    //sets in java all values is unique unordered list it will not maitain the proper order no index value
    let nummsss=new Set("bookkeeper");//it will convert into individual values 
    nummsss.add(3);
    nummsss.add("ruchitha");
    nummsss.forEach(value => {
        console.log(value)
    });
    // console.log(nummsss)//it will remove the repeated values 


    //maps in js in the map very value should have the key and value pair 
    let map = new Map();
    map.set("navin","java");
    map.set("ruchitha","android");
    map.set("chirag","ml");
    map.set("navin","js") // it will change the values in existing the values
    // for (let [k,v] of map) {
    //     console.log(k," : ",v);
    // }
    map.forEach((k,v) => {
        console.log(k," :" ,v);
    })

    // console.log(map.has("chirag"));//map .get("chirag")





