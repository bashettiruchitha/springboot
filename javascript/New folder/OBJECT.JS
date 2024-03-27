//OBJECT LITERAL
let input= 'name'
let  alien={
    name:'ruchitha',
    techonology:'js',//we can create mutliple objects
    work_exp:4
} //is a object
console.log(typeof alien)
console.log(alien.name)//alien['name']
console.log(alien['name'])
//complex object  having a object inside a object 
let a={
    n:'ruchitha',
    tech:'js',
    laptop:{
        cpu:'17',
        brand1:'apple'
    }
}
for(let p in a)
{ //it will one by one 
    if(p== 'laptop')
console.log(a[p]);
}
// console.log(a.laptop.brand.length);

console.log(a.laptop.brand?.length);// by putting ? it return undefined

//function + object 
function getfastedlaptop()
{
    if(laptop1.cpu1 >laptop2.cpu1){
        console.log(laptop1)
    }else{
        console.log(laptop2)
    }
}
let laptop1={
    cpu1:'i9',
    ram:16,
    brand1:'hp',

    greet3:function () {
        console.log('heloooo')
        
    }
}
// laptop1.greet3();
//this keyword
let laptop2={
    cpu1:'i',
    ram:16,
    brand1:'hp',
    compare:function(laptop1)
    {

        if(this.cpu1 >laptop2.cpu1){ //we can use thisoperator or lapatop
            console.log(laptop1)
        }else{
            console.log(laptop2)
        }
    }

    // getConfig: function () 
    // {
    //     console.log(this.brand1)
        
    // }
}
getfastedlaptop(laptop1,laptop2)
laptop1.compare(laptop2);





