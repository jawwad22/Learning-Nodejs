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
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let num1=Math.floor((Math.random()*10)+1);
// let num2=Math.floor((Math.random()*10)+1);
// let answer=num1+num2;

// rl.question(`what is ${num1}+${num2}?\n`,(userInput)=>{
//     console.log(userInput);
//     if(userInput.trim()==answer){
//         rl.close();
//     }
//     else {
//         rl.setPrompt('Incorrect response please try again \n');
//     rl.prompt();
    
// }

// });

// rl.on('close',()=>{
//     console.log('Correct!!!');
// })
//5

const fs=require('fs');
//create a file
// fs.writeFile('exampler.txt','this is an example'
// ,(err)=>{
//     if(err){console.log(err)}
//     else
//      {console.log('created successfully')
//     fs.readFile('exampler.txt','utf8',(err,file)=>{
//         if(err)
//         {
//             console.log(err);
//         }
//         else {
//             console.log(file);
//         }
//     })
//     }
// }
// )

//rename the file
// fs.rename('exampler.txt','example2.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log('rename the file ')
//     }
// })

//add in the file

// fs.appendFile('example2.txt','Some date being appended',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else {
//         console.log('ddaya added to file')
//     }
// })

//delete the file 

// fs.unlink('example2.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('successfully delete')
//     }
// })

//6
// fs.mkdir and fs rmdir
// fs.writeFile('./tutorial/example.txt')
// fs.unlink('./tutorial/example.txt') single file

//7
// readStream=fs.createReadStream('./example.txt','utf8');
// const writeStream=fs.createWriteStream('example.txt');
// readStream.on('data',(chunk)=>{
//     console.log(chunk);
//     writeStream.write(chunk);
// })