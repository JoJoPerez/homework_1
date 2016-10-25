//console.log('connected js');




document.addEventListener("DOMContentLoaded", function(event) { // waits for DOM

    
    var sneakers = document.getElementById('sneakers'); //get the divs and set to vars
    var SB = document.getElementById('SB'); //just the button
    

    


    
    SB.addEventListener("click", function(){
    	console.log('was clicked');
    	sneakers.style.display = 'inline';
    })


	var colors = [ 'black','maroon','black & white', 'TCQ'];
	for (i = 0; i < colors.length; i++) { 
	    console.log (colors[i]);
	    document.getElementById("colors").innerHTML += "<li>" + colors[i] + "</li>";

	}
 });   	// waits for DOM




// var Blazers = function(coolSneakers) {
    
//     document.getElementById('displaySneakersDivId').innerHTML = "Sneakers I Like"

// }

// console.log(coolSneakers);








