// //1
// console.log('Hello')
// //2
// const tutorial =require('./tutorial');
// console.log(tutorial.sum(1,1));
// console.log(tutorial.Pi);

// //3

// const EventEmitter=require('events');
// const eventEmitter=new EventEmitter();

// //event jab chala ga jab tutorial event run hoga
// eventEmitter.on('tutorial',()=>{
//     console.log('yeh tutorial chala');
// });
// eventEmitter.on('tutorialtwo',(num1,num2)=>{
//     console.log(num1+num2);
// });

// eventEmitter.emit('tutorial');
// eventEmitter.emit('tutorialtwo',2,3);

// class Person extends EventEmitter{
//     constructor(name){
//         super();
//         this._name=name;
//     }
//     get name(){
//         return this._name;
//     }
// }
// let pedro=new Person('Pedro');
// let hena=new Person('hena');
// pedro.on('name',()=>{
//     console.log('my name is '+ pedro.name);
// })
// hena.on('name',()=>{
//     console.log(hena.name)
// })

// pedro.emit('name');
// hena.emit('name');

//4
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1=Math.floor((Math.random()*10)+1);
let num2=Math.floor((Math.random()*10)+1);
let answer=num1+num2;

rl.question(`what is ${num1}+${num2}?\n`,(userInput)=>{
    console.log(userInput);
    if(userInput.trim()==answer){
        rl.close();
    }
    else {
        rl.setPrompt('Incorrect response please try again \n');
    rl.prompt();
    
}

});

rl.on('close',()=>{
    console.log('Correct!!!');
})
