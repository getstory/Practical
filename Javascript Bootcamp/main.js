/*console.log('hello '+ Date())

const age=22
console.log(age)


const arra= new Array(1,2,3,3,4,4,5)
console.log(arra)*/

/*const person= {
    Name:'Johen',
    Lastname:'Doe',
age:30,
hobbies: ['abc','def'],
address: {
street: '123',
city:'FA',
State: 'Delhi'
}
}
console.log(person);*/

/*
const myValue= [
    {
    id:1,
    text: 'Tak out Trach',
    isCompleted: true
},    {
    id:2,
    text: 'Breached',
    isCompleted: false
},
{
    id:3,
    text: 'Done',
    isCompleted: true
}
]

const todoJSON= JSON.stringify(myValue);
console.log(todoJSON); */

/*for(let i=0;i<=5;i++){
    console.log(i);
}*/


const myValue= [
    {
    id:1,
    text: 'Tak out Trach',
    isCompleted: true
},    {
    id:2,
    text: 'Breached',
    isCompleted: false
},
{
    id:3,
    text: 'Done',
    isCompleted: true
}
]

/*myValue.forEach(function(myValue){
    console.log(myValue.text);
})*/

/*const values= myValue.filter(function(myValue){
    return myValue.isCompleted===true;
}).map(function(myValue){
return myValue.id
})

console.log(values);*/


//constructor function
function Person(fistName, lastName, age){
    this.fistName= fistName;
    this.lastName=lastName;
    this.age= age;
}

const person1= new Person('a','Harris',20);
console.log(person1);