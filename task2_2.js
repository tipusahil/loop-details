/*Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

*/




//1.if condi. use kore.
var sum = 0;
for (let x = 91; x <= 129; x++) {
    if (x % 2 !== 0) {
        console.log("if condi. use kore normal niome odd sonkar jogfol: ", x);
        sum = sum + x;
    }
}
console.log('91 theke 129 obdi bejor/odd sonkar jgfol= ', sum);





//2.shorthand way te .if condi. use na kore
var sum = 0;
for (let x = 91; x <= 129; x += 2) { // x = x + 2;
    console.log("shorthand odd sonkar jogfol: ", x);
    sum = sum + x;

}

console.log('91 theke 129 obdi bejor/odd sonkar jgfol= ', sum);



//1.if condi. use kore. do  while loop er maddome .
var sumd = 0;
let d = 71;
do {
    if (d % 2 !== 0) {
        console.log("if condi. use kore normal niome odd sonkar jogfol: ", d);
        sumd = sumd + d;
    }
    d++;
} while (d <= 85);

console.log('91 theke 131 obdi bejor/odd sonkar jgfol= ', sumd);





//2.shorthand way te .if condi. use na kore
var sum = 0;

let hx = 2;
do {
    console.log("shorthand odd sonkar jogfol: ", hx);
    sum = sum + hx;
    hx += 2; // x = x + 2;
} while (hx <= 12)

console.log('91 theke 129 obdi bejor/odd sonkar jgfol= ', sum);





// node task2_2.js 