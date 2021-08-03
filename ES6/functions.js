//function statement
// implicit args - this, arguments
function sum(x, y){

    console.log("in sum", x, y);
    console.log(this);
    console.log(arguments);
    return x + y;

}

//override
// function sum(x, y,z,a){

//     console.log("in sum in 4 args", x, y,z,a);
//     return x + y;

// }
console.log("Result: ", sum(2,3));
console.log("Result: ", sum(2,3,4,5));

// function expression
//implicit arguments
var add = function(x, y){
    return x + y;
}

console.log("Result: ", add(20,30));

//Arrow function
//No impicit args
var compute = (x, y) => {
    return x * y;
}

console.log("Result: ", compute(20,30));
compute = (x, y) => x / y;
console.log("Result: ", compute(20,30));

var squareIt = x => x * x;
console.log("squareIt: ", squareIt(20));


var a = 10;

function bar(){

    console.log(a);
}

var obj = {
    id: 10,
    print: function(){

       
        console.log("id: ", this.id);

        // setTimeout(function(){
        //     console.log("id after 1 sec: ", this.id);
        // }, 1000);

        setTimeout(() => {
         
            console.log("id after 1 sec: ", this.id);
        }, 1000);
    }
}
obj.print();

var emp = {
    id: 100
}
//emp.print();

var empFn = obj.print.bind(emp);
empFn();


