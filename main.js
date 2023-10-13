//? Chapter No 35 - 38

//TODO Question No.01

// function currentTime() {
//     var date = new Date();
//     document.write(date);
// }

// currentTime();

//TODO Question No.02

// function greet() {
//     var firstName = prompt("Enter your First Name");
//     var lastName = prompt("Enter your Last Name");
//     alert("Assalamualaikum " + firstName + " " + lastName);
// }

// greet();

//TODO Question No.03

// function sum( a , b ) {

//     var result = a + b ;
//     return result;

// }

// console.log(sum( 2 , 5 ));

//TODO Question No.04

// function calculator( a , b , o ) {
    
//     var result;

//     if (o == "+") {
//         result = a + b ;
//         return result;
//     }

//     else if (o == "-") {
//         result = a - b ;
//         return result;
//     }

//     else if (o == "*") {
//         result = a * b ;
//         return result;
//     }

//     else if (o == "/") {
//         result = a / b ;
//         return result;
//     }

//     else if (o == "%") {
//         result = a % b ;
//         return result;
//     }

//     else {
//         alert("You Didn't Enter the Operator");
//     }
// }

// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");
// var operator = prompt("Enter What Operator will be between them");

// console.log(calculator( num1 , num2 , operator ));

//TODO Question No.05

// function numberSquare(a) {

//     var square = a*a;
//     return square ;

// }

// var number = +prompt("Enter a Number to Square.");

// console.log(numberSquare(number));

//TODO Question No.06   

// function factorial(n) {

//     if (n === 0) {

//       return 1;

//     }
    
//     else if (n < 0) {
    
//         return "We can't Find Factorial of Negative Numbers.";
    
//     } 
    
//     else {
      
//       return n * factorial(n - 1);
    
//     }

//   }
  
// var num = prompt("Enter Any Number.");

// result = factorial(num);

// if (result=="We can't Find Factorial of Negative Numbers."){

//     document.write(result);

// }

// else{

//     document.write("The Factorial of " + num + " is " + result);

// }

//TODO Question No.07

// function count( a , b ) {

//     for(var i=a ; i<=b ; i++){
//         document.write(i + " ");
//     }
// }

// var num1 = +prompt("Enter Starting Number");
// var num2 = +prompt("Enter Ending Number");

// count(num1,num2);

//TODO Question No.08

// function calculateHypotenuse(b , p){

//     function square(a){

//         return a = a * a;
    
//     }

//     var sum = square(b) + square(p);

//     var hyp = Math.sqrt(sum);

//     return hyp ;

// }

// var base = +prompt("Enter Base.");
// var perp = +prompt("Enter Perpendicular.");

// var result = calculateHypotenuse(base , perp);

// document.write("The Hypotenuse is " + result + ".");

//TODO Question No.09

//! i. Arguments as value

// function areaofTriangle(w , h){

//     var area = w * h ;
//     return area ;

// }

// document.write("The Are of Triangle is " + areaofTriangle(5 , 5) + ".");

//! ii. Arguments as variables

// function areaofTriangle(w , h){

//     var area = w * h ;
//     return area ;

// }

// var width = 5 ;
// var height = 5 ;

// document.write("The Are of Triangle is " + areaofTriangle(width , height) + ".");

//TODO Question No.10

// function Palindrome(str) {
  
//   var clear = str.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   var reverse = clear.split("").reverse().join("");
  
//   return clear == reverse;
// }

// var word = "Madam";
// document.write("Word : " + word + ".<br>");

// if (Palindrome(word)){

//   document.write("The Word is a Palindrome.");

// } 

// else {

//   document.write("The word is not a Palindrome.");

// }

//TODO Question No.11

// function capital(str) {

//   return str.replace(/\b\w/g, char => char.toUpperCase());

// }

// var string = "the quick brown fox";
// document.write("String : " + string + ".<br>");
// var capital = capital(string);
// document.write("Output : " + capital);

//TODO Question No.12

// function longestWord(str){

//     var words = str.split(' ');
  
//     let longestWord = '';
//     let longestLength = 0;
  
//     for (const word of words) {
      
//       var cleanedWord = word.replace(/[^a-zA-Z]/g, '');
      
//       if (cleanedWord.length > longestLength) {
//         longestWord = cleanedWord;
//         longestLength = cleanedWord.length;
//       }
//     }
  
//     return longestWord;
//   }

// var string = "Web Development Tutorial";
// var longest = longestWord(string);
  
// console.log("The longest word in the string is: " + longest);  

//TODO Question No.13

// function letterCounts(str, l){
    
//     var count = 0;
  
//     for (let i = 0; i < str.length; i++){

//       if (str[i] == l){

//         count++;
//       }

//     }

//     return count;

// }
  
// var string = "JSResourceS.com";
// var letter = "o";

// var result = letterCounts(string, letter);
  
// document.write("The Letter " + letter + " comes " + result + " times in this Sentence.");

//TODO Question No.14

// function calcCircumference(r){

//     var Pi = 3.142 ;
//     var circum = 2 * Pi * r ;

//     document.write("The circumference is " + circum + ".<br>");
// }

// function calcArea(r){

//     var Pi = 3.142 ;
//     r = r * r ;
//     var area = Pi * r ;
    
//     document.write("The area is " + area + ".<br>");
// }

// var radius = 5;

// calcArea(radius);
// calcCircumference(radius);



