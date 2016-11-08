//console.log('connected');

$(function() {

	var enter = $('#enter');
	var $thingsDiv = $('#things');

	var $type = $('#type');
	var $brand = $('#brand');
	var $addShoe = $('#add-shoe');
  

	var thingsTemplate = "" +
	"<li>" +
	"<p><strong>Name:</strong> {{name}}</p>" +   
	"<p><strong>Age:</strong> {{age}}</p>" +
	"<button data-id='{{id}}' class='remove'>X</button>" +
	"</li>";
	
	function addThings(things){
		$thingsDiv.append(Mustache.render(thingsTemplate, things));
	  }
	
	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/johnbob/friends',
		success: function(data){
			console.log(data); // success statement 1 everything is OK
		//	alert("API is UP safe to proceed");

			$.each(data, function(i, thing){ // success statement 2
				
			});
		},
		error: function() {
			alert("API is down /shrugz");
		}
	}); 

	$addShoe.on('click', function(){
		console.log('submit was clicked');

		var shoe = {
			name: $type.val(),
			age: $brand.val()
		}

		console.log(shoe);
	//	$thingsDiv.append("<li>" + shoe.type + " from: " + shoe.brand + "</li>");

		$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/johnbob/friends',
			data: shoe,
			success: function(newThing) {
				$thingsDiv.append("<li>" + newThing.name + " from: " + newThing.age + "</li>");
			},
			error: function() {
				alert("problem adding POST REQ");
			}
		})
	})
});


