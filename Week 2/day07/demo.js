// validation of input name and age
var name = document.getElementById("nameinput");
var namevalidation=document.getElementById("namevalidation");
var age = document.getElementById("ageinput");
var agevalidation=document.getElementById("agevalidation");
var checkname=false;
var checkage=false;
nameinput.addEventListener("input", function (e) {
	if (e.target.value.length > 4) {
		nameinput.style.border = "2px solid rgb(4, 104, 104)";
		namevalidation.style.display = "none";
        checkname=true;
	} else {
		nameinput.style.border = "2px solid red";
		namevalidation.style.display = "block";
        checkname=false;
	}
});
ageinput.addEventListener("input", function (e) {
	if (e.target.value > 18) {
		ageinput.style.border = "2px solid rgb(4, 104, 104)";
		agevalidation.style.display = "none";
        checkage=true;
	} else {
		ageinput.style.border = "2px solid red";
		agevalidation.style.display = "block";
        checkage=false;
	}
});
// Validatation of select element
var city = document.getElementById("city");
var cityvalidation = document.getElementById("cityvalidation");
var checkcity=false;
city.addEventListener("change", function() {
    if (city.value === "") {
        city.style.border = "2px solid red";
        cityvalidation.style.display = "block";
        checkcity=false;
    } else {
        city.style.border = "2px solid rgb(4, 104, 104)";
        cityvalidation.style.display = "none";
        checkcity=true;
    }
});

// Validatation of checkbox inputs
var football = document.getElementById("football");
var basketball = document.getElementById("basketball");
var vollyball = document.getElementById("vollyball");
var favoritevalidation = document.getElementById("favoritevalidation");
var checkfavorite=false;
function validateFavoriteSports() {
    var checkedCount = 0;
    if (football.checked) {
        checkedCount++;
    }
    if (basketball.checked) {
        checkedCount++;
    }
    if (vollyball.checked) {
        checkedCount++;
    }
    if (checkedCount < 2) {
        favoritevalidation.style.display = "block";
        checkfavorite=false;
    } else {
        favoritevalidation.style.display = "none";
        checkfavorite=true;
    }
}
football.addEventListener("change", validateFavoriteSports);
basketball.addEventListener("change", validateFavoriteSports);
vollyball.addEventListener("change", validateFavoriteSports);

// validation of all form
var formvalid=document.getElementById("formvalid");
var formNotvalid=document.getElementById("formNotvalid");
var submitbtn=document.getElementById("btn");
submitbtn.addEventListener("click",function(){
    if (checkname && checkage && checkcity && checkfavorite){
        formvalid.style.display="block";
        formNotvalid.style.display="none";

    }else{
        formvalid.style.display="none";
        formNotvalid.style.display="block";
    }
});
// reset button
var reset=document.getElementById("reset")

reset.addEventListener('click',function(){
    location.reload();});

