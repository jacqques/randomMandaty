function myFirstFunction (){
    return "greetings idiots"
}
const omg = function (greeting){
    console.log(greeting)
}
omg("hello") // thats an odd way to declare a function ey

console.log(myFirstFunction());

function hilater(anyreference){

    //setTimeout(function (){anyreference()},2500)
}

const afunction =() => {
    console.log("hi")
}

hilater(afunction)

function namefunction(something,name){
    console.log(something(name));
}
const noice = (name) => {
    return name
}
namefunction(noice, "myname")
namefunction(function (name){return "lick " + name}, "thomas")
namefunction((method) => {return "asskiss " + method},"thomas")
namefunction((method) =>  "asskiss " + method,"thomas")