// task 1
var num1=Number(prompt("Enter first number"));
var num2=Number(prompt("Enter second number"));
document.writeln("<span>task 1 </span>");
document.writeln("<h3>result is:</h3>");
document.writeln("<p>"+num1 +" + "+num2+" = "+ (num1+num2) +"</p>");
document.writeln("<p>"+num1 +" - "+num2+" = "+ (num1-num2) +"</p>");
document.writeln("<p>"+num1 +" * "+num2+" = "+ (num1*num2) +"</p>");
document.writeln("<p>"+num1 +" / "+num2+" = "+ (num1/num2) +"</p>");
// task 2
var checkNum=Number(prompt("Enter number to check if positive or negative and if odd or even"));
document.writeln("<span>task 2 </span>");
if (checkNum > 0 ){
    document.writeln("<p>"+checkNum+" is positive"+"</p>");
}else if (checkNum <0){
    document.writeln("<p>"+checkNum+" is negative"+"</p>");
}else{
    document.writeln("<p>"+checkNum+" is not positive or negative"+"</p>");
}
if (checkNum%2== 0 ){
    document.writeln("<p>"+checkNum+" is even"+"</p>");
}else{
    document.writeln("<p>"+checkNum+" is odd"+"</p>");
}
// task 3
var checkFizzBuzz=Number(prompt("Enter number to FizzBuzz Problem"));
document.writeln("<span>task 3 </span>");
if(checkFizzBuzz%3==0 && checkFizzBuzz%5 ==0){
    document.writeln("<p>"+checkFizzBuzz+" is FizzBuzz"+"</p>");
}else if (checkFizzBuzz%3==0 ){
    document.writeln("<p>"+checkFizzBuzz+" is Fizz"+"</p>");
}else if (checkFizzBuzz%5 ==0){
    document.writeln("<p>"+checkFizzBuzz+" is Buzz"+"</p>");
}else{
    document.writeln("<p>"+checkFizzBuzz+" is not FizzBuzz"+"</p>");
}
// task 4
var repeat=Number(prompt("Enter number to repeat heading"));
document.writeln("<span>task 4 </span>");
for(var i=1; i<=repeat;i++){
    document.writeln("<h"+i+">Rewan Abd Elaziz</h"+i+">");
}

