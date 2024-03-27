function stud(id,name,course) 
{//function creation
this.id=id;
this.name=name;
this.course=course;
    
}
var Student = new stud(1,"ruchitha","cse");//object creation
// we used the constructor so that we are using the this pointer
console.log(Student.id+Student.name+Student.course);

//passing the arugments 
function myretun(x,y){
    return x*y;
}
console.log("the product of the two numbers are "+myretun(12,34));//calling part