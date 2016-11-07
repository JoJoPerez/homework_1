//console.log('connected');

$(function() {

var enter = $('#enter');
	

	$.ajax({
		type: 'GET',
		url: '/api/enter',
		success: function(enter){
			$.each(enter, funtion(i, enter) {
			 $.enter.append('<li>name: '+ enter.name +', sneaker:'+ enter.sneaker +'</li>')
			 });
		});



     }); 
});


