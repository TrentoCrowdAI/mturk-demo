const MT = require('./mturk').MT;

var params = {};

MT.getAccountBalance(params, function(err, data) {
  if (err) {
    console.error(err, err.stack); // an error occurred
  } else {
    console.log(data); // successful response
  }
});
