// 1 theke 50 obdi jei sonka gulo 3 otoba 5 diye bak jabe sei sonka gulo dekte cacci+ ogulor jugfol dekte cacci.


// 1) 1-50 obdi sonakr modde 3 otoba 5 diye bak jai jei sonka gulo 
var  sum1 = 0;
for ( let x = 1 ; x<=50; x++){
    if(x % 3 ===0 || x % 5 ===0){
        console.log( "1-50 obdi 3 or 5 diye bak jai ei sonka gulo: ", x);

        sum1= sum1 + x;
    }
}

console.log( 'total numbe of 1-50 obdi 3/5 diye bak jaije sonka gulor jogfol: ' ,sum1);


// 2.) 1-100 obdi jei sonka gulo shudo matro 6 & 8 diye bak jai sei sonka gulo ,& sei sonka gulor jogfol er function: 

var sum2 = 0;
let y= 1;
while(y<=100){

    if(y % 6 ===0 && y % 8 ===0){
        console.log("1-100 obdi 6 and(&) 8 diye bak jai ei sonka gulo holo: ",y);
        sum2 = sum2+ y;
    }
    y++;
}
console.log('total numbe of 1-100 obdi 6 & 8 diye bak jaije sonka gulor jogfol: ' ,sum2)


// node loop_6_diffrent.js