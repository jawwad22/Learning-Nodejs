//1
console.log('Hello')
//2
const tutorial =require('./tutorial');
console.log(tutorial.sum(1,1));
console.log(tutorial.Pi);

//3

const EventEmitter=require('events');
const eventEmitter=new EventEmitter();

//event jab chala ga jab tutorial event run hoga
eventEmitter.on('tutorial',()=>{
    console.log('yeh tutorial chala');
});
eventEmitter.on('tutorialtwo',(num1,num2)=>{
    console.log(num1+num2);
});

eventEmitter.emit('tutorial');
eventEmitter.emit('tutorialtwo',2,3);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name=name;
    }
    get name(){
        return this._name;
    }
}
let pedro=new Person('Pedro');
let hena=new Person('hena');
pedro.on('name',()=>{
    console.log('my name is '+ pedro.name);
})
hena.on('name',()=>{
    console.log(hena.name)
})

pedro.emit('name');
hena.emit('name');
