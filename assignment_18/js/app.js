console.log('my js was hit')

var cameras = new Array ['sony' ,  'canon' ,  'fuji'];

for (i = 0; i < cameras.length; i++) { 
    console.log ( cameras [i] );

}


document.addEventListener('DOMContentLoaded', function(){

  document.getElementById('cameras').innerHTML =  '<ul><li>' + cameras [0] + '</li><li>' + cameras [1] + '</li><li>' + cameras [2] + '</li></ul>';


 


});
