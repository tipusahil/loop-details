//node squar_break.js

for (let i = 1; i <= 100; i++) {
    // Square root ber kore dekhi
    let sqrt = Math.sqrt(i);

    // Jodi sqrt integer hoy (mane sqrt er fraction na thake)
    if (Number.isInteger(sqrt)) {
        console.log(`First square number: ${i}`);
        break; // Loop ke ekhanei stop kore dibo
    }
}


for(let i = 3; i <=100; i++){
 var squareNumber =   Math.sqrt(i);

 if(Number.isInteger(squareNumber)){
    console.log(`First square number: ${i}`);

    break;
 }
}