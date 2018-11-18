var changeView = document.getElementsByClassName("thumbnails");

changeView[0].addEventListener("click", function(){
	var currentClass 		= document.getElementsByTagName("body")[0];
	var currentClassName	= currentClass.className
	if (currentClassName == "kachel") {
		currentClass.classList.remove("kachel");
		currentClass.classList.add("listen");
	}else {
		currentClass.classList.remove("listen");
		currentClass.classList.add("kachel");
	}
}, true)