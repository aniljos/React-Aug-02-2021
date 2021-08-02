//console.log("global x: ", x);
//var x = 10; // global- hoisted
let x = 10; // global
console.log("global x: ", x);

foo();


function foo(){

    console.log("fn x: ", x);
    //console.log("fn y: ", y);

    var x = 20; // function - hoisted
    console.log("fn x: ", x);


    if(x > 5){

        let y = 30; // function- hoisted
        console.log("fn y: ", y);
    }
    //console.log("fn y: ", y);
}

