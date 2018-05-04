//Business logic
var pingPong = function(input) {
  var result = [];
  for(var i = 1; i <= input; i++){
     if (i % 3 === 0 && i % 5 === 0){
      result.push('pingpong');
    }else	if(i % 3 === 0){
      result.push('ping');
    } else if (i % 5 === 0){
      result.push('pong');
    } else {
      result.push(i);
    }
  }
    return(result)
};

//UI Logic
$(document).ready(function(){
	$('#myForm').submit(function(e){
    $("#output").empty();
  	e.preventDefault();
    var input = parseInt($('input#value').val());
  	var output = pingPong(input);
    
    output.forEach(function(item) {
    $("#output").append('<li>' + item + '</li>');
    });
    /* $('#value').val('') */
  });
});
