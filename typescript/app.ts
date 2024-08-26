
function tas(n1: number, n2: number){
return n1 + n2
}
console.log(tas(10,30))

function anyname(name: string,age: number,country: string){
    return `${name} - ${age} - ${country}` ;
    
}
console.log(anyname("tasnem",40,"egypt"))

// anonymous function
const add = function(num1:number, num2:number) : number{
return num1 + num2
}
console.log(add(60,10))
// arrow function
const addarow = (num1:number, num2:number):number => num1*num2
console.log(addarow(10,20));

type mix = string | number;
let ss:mix = "tasneem"
 ss= "10"
 
 let myobject:{
  name:string,
  age:number,
  hire:boolean,
  skills:{
    one:string,
    two:string
  }
 } = {
 name:"tasneem",
  age:20,
  hire:true,
  skills:{
    one:"html",
    two:"css"
 }
};
myobject.name="salma"
myobject.age=11
myobject.hire=false
 
console.log(myobject.name)
console.log(myobject.age)
console.log(myobject.hire)
console.log(myobject.skills.one)

type Gender = 'male' | 'female'
type User = {
  readonly id: string,
  name: string,
  age: mix,
  gender: Gender,
  email?: string,
}

interface User2 {
  readonly id: string;
  name: string;
  age: mix;
  gender: Gender;
  email?: string;}

  class Car {
    constructor(protected color: string) {
      console.log('Inside Constructor');
      console.log(`Car color is ${this.color}`);
    }
    maxSpeed(speed: number): string { return (`Car Max Speed is ${speed}`) }
  }
  
  const car2: Car = new Car('Red')
  console.log(car2.maxSpeed(200));
  
  function first(val: any) {
    console.log(val);
    return function (target: any) {
      console.log("first(): called");
    };
  }
  
  @first('From Ford Class')
  class Ford extends Car {
    constructor(private name: string, protected color: string) {
      super(color);
      console.log(`Car Name is ${name}`);
    }
  }
  
  const ford1: Ford = new Ford('Ford Explore', 'Black')