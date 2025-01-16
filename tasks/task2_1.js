
// 61 theke 100 obdi bejor /odd sonka gulo print kora .

for(let x= 61; x<=100; x++){
//  shorthand holo if er condition ta use na korei odd/ even sonka ber kora jai.
   if(x % 2  !== 0){
      console.log(x);
   }
}



for(let q= 61; q <=100; q=q+2){//q/61 er sate prottekbar 2 jog hole bejor songa hoye jabe.
   console.log("shorthand e if use na kore odd sonka: ", q);

}


console.log('while loop diye 78 theke 98 obdi jor sonka print start')
// Find all the even numbers from 78 to 98.

let y=78;
 while(y<=98){
   if(y % 2 === 0){
      console.log(y);
   }
   y++;
 }

//  shorthand holo if er condition ta use na korei odd/ even sonka ber kora jai.
//while loop er vitore if er condition ta use na kore just increament er jaigai koto kore jog hobe seta cinta kore define kore dilew hoye jabe odd/even er kaj.jmn: 

let g=78;
while(g<=98){
   console.log("shorthand e if use na kore even sonka: ", g);
   g += 2;// g= g+2; etar shorthand g += 2;
}