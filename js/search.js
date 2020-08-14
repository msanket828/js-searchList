//accessing require html elements in js via dom
var searchInput=document.querySelector("#search"),
		submit=document.querySelector("#submit"),
		li=document.querySelectorAll("li"),
		films=document.querySelector(".films");


searchInput.addEventListener("keyup",function() {
	let searchValue=searchInput.value.toLowerCase();
	console.log(searchValue);
	for(let i=0;i<li.length;i++) {
		let h2=li[i].querySelector("h2");
		let textValue=h2.innerText;
		if(textValue.toLowerCase().indexOf(searchValue)>-1) {						
			if(li[i].style.display="none") {
				li[i].style.display="";				
			} else {
					li[i].style.display=" ";
				}
		} else {
				li[i].style.display="none";							
			}

		if(searchValue=="" || searchValue==null) {			
			if(li[i].style.display="none") {
				li[i].style.display="";
			}
		} 
	}		
});


