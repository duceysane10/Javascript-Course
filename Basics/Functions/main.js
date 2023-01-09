/* Functions:
waxaa loo is ticmaalaa si howl aan mar qabanay aan dib dambe uqabanin oo isga lii aan wacano*/

// examples
// this function returns square of the given number

// function square(num){ //function declartion
//     return num*num;
// }
// //function calling
// console.log(square(5));


// //  anather way of using function is Function expression
// // examples
// const square1 = function (num){ //function declartion
//     return num*num;
// }
// //function calling
// console.log(square1(6));

// //  anather way of using function is Arrow Function 
// // examples
// // example 1
// const square2 = (num) => {return num*num;}
// //function calling
// console.log(square1(7));

// example 2
//Write a function to convert Celsius to Fahrenheit
//Function `calFahrenheit()` returns the converted Celsius value to Fahrenheit value based on the formula `(Celsius × 9/5) + 32 = Fahrenheit`

//sol
// const calFahrenheit = (Celsius) => {return 'Fahrenheit: ${(Celsius * 9/5) + 32;}' }

// console.log(calFahrenheit(0));
// console.log(calFahrenheit(20));
// console.log(calFahrenheit(40));


// example : 
// wrete a program that displays power of any number e.g 2^10 = 1024
 //2 * 1 = 2;

 let result = 1;
 const power = (bas,exp) => {
    for(let i=0; i < exp;i++){
        result = bas * result;
    }
    return 'Power of '+bas+'^'+exp+ " = "+ result;
 }
 console.log(power(2,10));
