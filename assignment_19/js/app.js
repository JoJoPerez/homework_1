console.log ('connected to app.js')


var msg = 'This stuff is cool'; 

function checkOut() {
	var checkoutDiv = document.getElementById('checkout');
		checkoutDiv .textContent = msg; 	
}



document.addEventListener("DOMContentLoaded", function(event) {
	

	
	console.log("DOM fully loaded and parsed");
	
	checkOut();

});


