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