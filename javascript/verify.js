window.onload = function () {
	document.getElementById("send").addEventListener("click",function(){
		var name=document.getElementById("name").value;
		var email=document.getElementById("email").value;
		var phone=document.getElementById("phone").value;
		var message=document.getElementById("message").value;
		var regEmail=/[^@]+@[a-zA-Z0-9]+\.[a-zA-Z]+/;
		var regPhone=/(\+)?[0-9]+/;
//console.log(reg.test(email)+" "+(email.match(/@/g) || []).length);
		console.log(regPhone.test(phone));
		if(name.length==0){
			alert("Please fill name box");
		}else if(!regEmail.test(email)&&(email.match(/@/g) || []).length!=1){
			alert("Invalid Email address");
		}else if(!regPhone.test(phone)&&phone.length!=0){
			alert("Invalid Number Phone");
		}else if(message.length==0){
			alert("Please fill message Box");
		}
	});
	var media=window.matchMedia( "(max-width: 320px)" );
	if(media.matches) {
	    document.getElementById("footer").insertBefore(document.getElementById("menu"),document.getElementById("firstFooterElement"));
	}
	media.addListener(function(changed) {
	    if(changed.matches) {
	        document.getElementById("footer").insertBefore(document.getElementById("menu"),document.getElementById("firstFooterElement"));
	    } else {
	        document.getElementById("header").appendChild(document.getElementById("menu"));
	    }
	});
}

