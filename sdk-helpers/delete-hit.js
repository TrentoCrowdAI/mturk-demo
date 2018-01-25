const MT = require('./mturk').MT;

const params = {
  HITId: '3X2LT8FDHWPMSWOJ5TU71ZG85M3W86' /* required */
};

MT.deleteHIT(params, function(err, data) {
  if (err) {
    console.error(err, err.stack); // an error occurred
  } else {
    console.log(data); // successful response
  }
});
