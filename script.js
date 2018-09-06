function displaynav(){
	var nav_menu = document.getElementById("nav_menu");
	if (nav_menu.style.display == "none"){
		nav_menu.style.display = "flex";
	}else{
		nav_menu.style.display = "none";
	}
}

function openPage(pageName, elemt){

	var i = 0, about_content, menuLinks;
	about_content = document.getElementsByClassName("about_content");
	for (i; i < about_content.length; i++){
		about_content[i].style.display = "none";
	}

	menuLinks = document.getElementsByClassName("menuLinks");
	for (i = 0; i < menuLinks.length; i++){
		menuLinks[i].id = "";
	}

	document.getElementById(pageName).style.display = "flex";
	elemt.id = "linkOn";
}

