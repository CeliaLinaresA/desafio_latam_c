
var firstName = "adela";
var age = 60;

var addAnElement = function(myArr){
myArr.push(10)
;
}
var myFunc = function(){
firstName = "juan";
}

var agePlusOne =  function(person){
    person.age = person.age+1;
}


console.log(firstName);
myFunc();
console.log(firstName);
agePlusOne(person);
console.log(person.age);

//funciones que retornan funciones
function helloWorld(outPutter){
    outPutter("Hola mundoooo");
}

function consoleOutput(myString){
    console.log(myString);
}

helloWorld(consoleOutput);

//funciones anidadas
function calculateTotal(filter);{
    function discount() {
        return total-20;
    }
    function shipping(){
    }
    
    shipping(discount()calculateTotal());

//piedra, papel o tijera con funciones
function isTied(play1, play2){
    return play1 == play2;
}

function rockWin(play1, play2){
var array = [play1, play2];
  return arrayIncludes(array, "rock") && arrayIncludes(array, "scissor");
 //return array.includes(("rock") &&  array.includes("scissor");
 }

function paperWin(play1, play2){
    var array = [play1, play2];
  return arrayIncludes(array, "rock") && arrayIncludes(array, "paper");
}
 
function scissorWin(play1, play2){
    var array = [play1, play2];
  return arrayIncludes(array, "scissor") && arrayIncludes(array, "paper");
}
console.log(rockWin("rock", "scissor"));
console.log(rockWIn);

    function arrayIncludes(array, element){
       var results = array.filter(function(i){
            return i==element;
        });
       return results.length mayor a 0;
   }

   //nueva tarea