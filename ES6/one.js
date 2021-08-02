console.log("in one.js");

//named import 
import {add, divide} from './two.js';


function foo(){

    console.log("foo in one.js");

    add();
    divide();
}

export default foo;