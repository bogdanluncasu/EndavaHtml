window.onload = function () {
	document.getElementById("send").addEventListener("click",function(){
		var name=document.getElementById("name").value;
		var email=document.getElementById("email").value;
		var phone=document.getElementById("phone").value;
		var message=document.getElementById("message").value;
		var regEmail=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
		var regPhone=/^(\+)?[0-9]+$/;
		var regName=/^([A-Z][a-z]+ )+([A-Z][a-z]+)$/;
//console.log(reg.test(email)+" "+(email.match(/@/g) || []).length);
		console.log(regName.test(name));
		if(name.length==0){
			alert("Please fill name box");
		}else{
				if(!regName.test(name)){
					alert("Please, spell your name correctly");
				}
			 else if(!regEmail.test(email)||email.length==0){
				alert("Invalid Email address");
			}else if(!regPhone.test(phone)&&phone.length!=0){
				alert("Invalid Number Phone");
			}else if(message.length==0){
				alert("Please fill message Box");
			}
		}
	});
	var media1=window.matchMedia( "(max-width: 728px)" );
	media1.addListener(function(changed) {
	    if(changed.matches) {
	       alert(728);
	    } else {
	    }
	});



	var media=window.matchMedia( "(max-width: 320px)" );
	if(media.matches) {
	    document.getElementById("footer").insertBefore(document.getElementById("menu"),
	    	document.getElementById("firstFooterElement"));

	    
	}
	media.addListener(function(changed) {
	    if(changed.matches) {
	        document.getElementById("footer").insertBefore(document.getElementById("menu"),
	        	document.getElementById("firstFooterElement"));
	    } else {
	        document.getElementById("header").appendChild(document.getElementById("menu"));
	    }
	});
}

