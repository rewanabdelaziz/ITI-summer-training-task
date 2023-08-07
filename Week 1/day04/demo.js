// task 1
var arr = ["mona","ali","alaa","hoda","ahmed","Fathy"];
function randomElement(){
   return arr[Math.floor(Math.random()*6)]+" "+arr[Math.floor(Math.random()*6)];
}
document.writeln("<p>two elements is : "+randomElement()+"</p>");
// task 2
function indexOfChar(){
var str=prompt("Enter a string");
var char=prompt("Enter a character");
var index=[];
for(var i=0;i<str.length;i++){
    if (str[i]==char){
       index.push(i);
    }
}
if (index.length == 0){
    index.push(-1);
}
return index;
}
document.writeln("<p>index is :"+indexOfChar()+"</p>");
// task 3
function arrayMethods(){
    var arr2=[];
    var sum=0;
    for(var i=0;i<5;i++){
        var x=parseInt(prompt("Enter element "+i+":"));
        arr2.push(x);
        sum+=x;
    }
    var ascending=arr2.sort();
    document.writeln("<p>sum is: "+sum+"</p><p>sort ascending is:"+ascending+"</p>");
    var descending=ascending.slice().reverse();
    document.writeln("<p>sort descending is:"+descending+"</p>");
}
arrayMethods();
// task 4
function CountE(){
    var str2=prompt("Enter a string");
    count=0;
    for(var i=0;i<str2.length;i++){
        if(str2[i]=="e"||str2[i]=="E"){
           count+=1;
        }
    }
    document.writeln("<p>count of e is: "+count+"</p>")
}
CountE();
