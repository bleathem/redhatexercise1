function remoteMathService(cb) {
 var one, two;
 callOneService(function(err, num) {
  if (err) {
    console.log("error ", err);
  }
  else{
    one = num;
    callTwoService(function(err, num) {
    if (err) {
      console.log("error ", err);
    }else{
      two = num;
      return cb(undefined, one + two);
    }
   });
  }
 });
}


function callOneService(cb) {
 setTimeout(function() {
 return cb(undefined, 1);
 }, 1000);
}


function callTwoService(cb) {
 setTimeout(function() {
 return cb(undefined, 2);
 }, 1500);
}


remoteMathService(function(err, answer) {
 if (err) console.log("error ", err);
 if (answer !== 3) {
  console.log("wrong answer", answer);
 } else {
  console.log("correct");
 }
});


if (typeof exports !== 'undefined') {
   exports.remoteMathService = remoteMathService
   exports.callOneService = callOneService
   exports.callTwoService = callTwoService
}