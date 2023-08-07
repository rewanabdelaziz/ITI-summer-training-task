// task 1
function checkValid(){
var name=document.getElementById("name");
var age=document.getElementById("age");
var nameError=document.getElementsByClassName("namevalidation")[0];
var ageError=document.getElementsByClassName("agevalidation")[0];
var formValid=document.getElementsByClassName("formvalid")[0];
var nameValid=true;
var ageValid=true;
if(name.value.length <= 3){
    nameValid=false;
    nameError.innerHTML="your name length must be greater than 3";
}else {
    nameError.innerHTML = ""; 
}
if(age.value <= 18){
    ageValid=false;
    ageError.innerHTML="your age must be greater than 18";
} else {
    ageError.innerHTML = ""; 
}
if(nameValid==true && ageValid==true){
    formValid.innerHTML="Data Valid"
}else {
    formValid.innerHTML = ""; 
}
}
// task 2
function chInnerText(){
    var newValue=document.getElementById("text");
    var content=document.getElementsByClassName("content")[0];
    content.innerText=newValue.value;

}
function chInnerHTML(){
    var newValue=document.getElementById("text");
    var content=document.getElementsByClassName("content")[0];
    content.innerHTML=newValue.value;

}
function chStyle(){
    var newValue=document.getElementById("text");
    var content=document.getElementsByClassName("content")[0];
    content.style.background=newValue.value;

}
function chContent(){
    var newValue=document.getElementById("text");
    var content=document.getElementsByClassName("content")[0];
    content.textContent=newValue.value;

}

