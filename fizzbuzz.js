/* 
If the number is divisible by three 3 - Print fizz instead of the number.
If the number is divisible by three 3 - Print buzz instead of the number.
If the number is divisible by three 3 - Print fizzbuzz instead of the number.
1-20
1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fuzzbuzz 16 17 fizz 19  buzz
*/

for(i = 0; i <= 20; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("fizzBuzz");
    }
    else if(i % 3 == 0){
    console.log("fizz");
    }
    else if(i % 5 == 0){
    console.log("buzz");
    }
    else{
    console.log(i);
    };
    
    };
    