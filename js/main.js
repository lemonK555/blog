var menu = document.getElementById("menu");
var allContent = document.getElementById("allContent");

function showBanner(str,e){
	var last = str.charAt(str.length - 1);
	if(last === "h"){
		e[0].style.transition = "transform 1s ease, opacity 1s ease";
		e[0].style.transform = "scale(1)";
	}else if(last === "p"){
		e[0].style.transition = "opacity 1s ease 1s";
	}else if(last === "b"){
		e[0].style.transition = "opacity 1s ease 1.5s";
	}else if(last === "a"){
		e[0].style.transition = "opacity 1s ease 2s";
	}
	e[0].style.opacity = "1";
}

function showMenu(){
	var screenWidth = window.innerWidth;
	var screenHeight = window.innerHeight;
	var clientHeight = document.body.clientHeight;
	var clientWidth = document.body.clientWidth;
	
	
	menu.style.height = screenHeight+"px";
	menu.style.right = "0";
	menu.style.transition = "right 1s ease 0.5s";


	allContent.style.height = clientHeight+"px";
	allContent.style.width = clientWidth - 320+"px";
	allContent.style.background = "rgba(0,0,0,0.3)";
	allContent.style.transition = "width 1s ease 0.5s";
}

function closeMenu(){
	menu.style.right = "-350px";
	menu.style.transition = "right 1s ease 0.5s";
	allContent.style.background = "rgba(0,0,0,0)";
	allContent.style.width = clientWidth+"px";
	allContent.style.transition = "width 1s ease 0.5s, background 1s ease 0.5s";

}
