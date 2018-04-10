const MT = require('./mturk').MT;

var params = {
  ExpireAt: 0 /* required. 0 means expire immediately */,
  HITId: '3WKGUBL7SZZWRE0JJ0WKE7N3Z074LS' /* required */
};

MT.updateExpirationForHIT(params, function(err, data) {
  if (err) {
    console.error(err, err.stack); // an error occurred
  } else {
    console.log(data); // successful response
  }
});