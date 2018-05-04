//Business logic
var pingPong = function(input) {
  var result = [];
  for(var i = 1; i <= input; i++){
     if (i % 3 === 0 && i % 5 === 0){
      result.push('ping-pong');
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