const MT = require('./mturk').MT;

var params = {
  ExpireAt: 0 /* required. 0 means expire immediately */,
  HITId: '3X2LT8FDHWPMSWOJ5TU71ZG85M3W86' /* required */
};

MT.updateExpirationForHIT(params, function(err, data) {
  if (err) {
    console.error(err, err.stack); // an error occurred
  } else {
    console.log(data); // successful response
  }
});