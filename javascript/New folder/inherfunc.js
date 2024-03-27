let Person= function(name,gender,by1){ //parent is base class
        this.name=name;
        this.gender=gender;
        this.by1=by1;
    }
    Person.prototype.calage= function(){
        let age=new Date().getFullYear()-this.by1;
        console.log(age);
    };

    let jeery=new Person('john','male',1880);
    console.log(jeery);

    //employee function constructor
    //this ==marr
    //employee is child class 
    let Employee=function(name,gender,by,empid,salary)
    {
        // this.name=name;
        // this.gender=gender;
        // this.by=by;
        Person.call(this,name,gender,by);//here call method is used employee method 
        this.empid=empid;
        this.salary=salary;
        
    }
    Employee.prototype=Person.prototype;
    
    Employee.prototype.calsalary=function(){
        return this.salary * 12;
    }
    Employee.prototype.empdeatils=function(){
        console.log(this.name);
        console.log(this.empid)
    }
    Employee.prototype.empdeatils=function(){
        console.log(this.name)
        console.log(this.empid)
    }
  

    let meer=new Employee('meert','m',1995,121,12000);
    console.log(meer);
    meer.calsalary();
     meer.empdeatils();
