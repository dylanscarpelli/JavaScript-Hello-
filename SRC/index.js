//import draw-stuff;
// var fs = require('fs');
 
// var path = "C:/test";
 
// fs.readdir(path, function(err, items) {
//     console.log(items);
 
//     for (var i=0; i<items.length; i++) {
//         console.log(items[i]);
//     }
// });





console.log("Hello World");

let productName = 'Hammer',
    spaghetti   = "Spaghetti"
;

let myNum = 20;

console.log( typeof(productName), spaghetti, myNum);
let value = 4.1 + 3.6 ; // we get 7.6999999 here

console.log(value);

let values = [ 1, 2, 3 ];
console.log(values[0]); //1
console.log(values[1]); //2
console.log(values); // dispaly all elements in the array
console.log(values.length); //size of array (# of elements)

let notaVector = [];
notaVector.push(44);
notaVector.push(33);
notaVector.push(55);
console.log(notaVector);
notaVector.pop(); // deletes last element
console.log(notaVector);
notaVector.push(66);
notaVector.push(79); 
notaVector.shift(); // deletes first element
console.log(notaVector); // 33 66 79
notaVector.splice(0, 2, 11, 22, 33); //will delete 33 and 66 and add 1 2 3 to array so new array will be 11 22 33 79
console.log(notaVector); 

let state = 'FL';
if ( state === 'FL')
{
    console.log("state is Florida")
}


if ( state!== 'CA')
{
    console.log("State is not California");
}

state = 'TX';


switch(state)
{
    case('TX'):
        console.log("state is Texas");
        console.log("Austin");
        break; // if break statement is not here code will fall through to next statement
    default:
        console.log('uknown');
         break;
    
}

function triplePLus(value)
{
    let newValue = value + value + value;
    return newValue;
}
console.log(triplePLus(5) + " this is the result of triplePlus");





for (var i = 0; i < 3; i++)
{
    console.log(i);
}

console.log("Whatever");

function spaghettiMy() {

    for(var i = 0; i < 3 ; i++)
    {
        console.log(i);
    }

    console.log("After loop " + i );

}

spaghettiMy();

let persons = [ 
{ 
    name: "John",
    age: 32,
    partTime: false
},

{
    name:"Henry",
    ability: "nah",
    age:69,
    partTime: true
}
];

console.log(persons.name); //john
console.log(persons.age); //32
console.log(persons.partTime); //false

function changePerson(persons)
{
    persons.age = 60 ;
}

changePerson(persons);
console.log(persons.age);
console.log( persons[0].name, persons[1].ability );

let result = Math.random() *52;
result = Math.trunc ( result);

let dateResult = new Date().toDateString();
console.log( dateResult );
console.log( result ) ;
