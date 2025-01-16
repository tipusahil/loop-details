/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let sum1= 0;
let  x= 0;
while( x<105){

if(sum1>100){
    break;
}

else{
    console.log(x);
    sum1 =sum1 + x;
}


    x++;
}

// node break_task.js