function print_hello() {
  console.log('Hello');
}
//calling
print_hello(); //prints Hello


function print_hello(name) {
  console.log(`Hello ${name}`);
}
//calling
print_hello('John'); //prints Hello John


function add(a, b) {
  return a + b;
}
//calling
let sum = add(2, 3);
console.log(sum); //prints 5
let r = add("ahmad","0811") //no semicolon - valid
console.log(r) //prints ahmad0811

//Function 2
const sub = (x,y) => {
    return x-y;
}
//calling
let r1 = sub(5,3);
console.log(r1); //prints 2

const mult = (x,y) => x*y; //same line
//calling
let r2 = mult(5,3);
console.log(r2); //prints 15


//Function 3
const math = (x,y, f) => f(x,y);

//calling
let r3 = math(5,3,add);
console.log(r3); //prints 8

let r4 = math(5,3,sub);
console.log(r4); //prints 2

let r5 = math(5,3,mult);
console.log(r5); //prints 15

let r6 = math(6,2,(x,y) => x/y);
console.log(r6); //prints 3