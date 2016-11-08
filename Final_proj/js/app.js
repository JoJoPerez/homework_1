//console.log('connected');

$(function() {

	var enter = $('#enter');
	var $thingsDiv = $('#things');

	var $type = $('#type');
	var $brand = $('#brand');
	var $addShoe = $('#add-shoe');

	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/johnbob/friends',
		success: function(data){
			console.log(data); // success statement 1 everything is OK
		//	alert("API is UP safe to proceed");

			$.each(data, function(i, thing){ // success statement 2
				$thingsDiv.append("<li>" + thing.name + " you are this old: " + thing.age + "</li>")
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


