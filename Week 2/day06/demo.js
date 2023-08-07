// task1 slider
var img=document.getElementById("img");
var arr=["img/1.jpg","img/2.jpg","img/3.jpg"];
index=0;
function nextSlide(){
index++;
if(index>arr.length-1){
    index=0;
}
img.setAttribute("src",arr[index]);
}
// task 2
i=1;
function addData(){
var name=document.getElementById("name").value;
var age=document.getElementById("age").value;
var table=document.getElementById("data");
var row = table.insertRow(i);
var idcell = row.insertCell(0);
var namecell = row.insertCell(1);
var agecell = row.insertCell(2);
idcell.innerHTML=i;
namecell.innerHTML=name;
agecell.innerHTML=age;
i++;
}
// task3
function downloadLink(){
var par=document.getElementById("info")
var link=document.getElementById("link");
counter=3;
var myinterval=setInterval(function() {
    if(counter > 0) {
        par.innerHTML= "Linl will appear after " + counter +  " seconds";
         
    } else {
        clearInterval(myinterval);
        par.style.display="none";
        link.style.display="block";
   }
   counter--;
 }, 3000);
}
// window task
function openNewTab() {
    myWin = window.open("./newTab.html", "", "width=300,height=300");
}
function closeTab() {
	myWin.close();
}
function moveToTab() {
	myWin.moveTo(200, 200);
}
function MoveByTab() {
	myWin.moveBy(50, 50);
}
function ResizeToTab() {
	myWin.resizeTo(200, 200);
}
function ResizeByTab() {
	myWin.resizeBy(100, 100);
}
// counter task
var output=document.getElementById("output");
var myInterval2;
function startCount() {
    var i = 0;
    myInterval2 = setInterval(function () {
        output.innerHTML = i++;
}, 1000);
}

function stopCount() {
	clearInterval(myInterval2);
}