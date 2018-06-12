const moment = require('moment');

const MT = require('./mturk').MT;

var params = {
  ExpireAt: 0 /* required. 0 means expire immediately */,
  // ExpireAt: moment()
  //   .add(240, 'm')
  //   .unix(),
  HITId: 'HIT ID' /* required */
};

MT.updateExpirationForHIT(params, function(err, data) {
  if (err) {
    console.error(err, err.stack); // an error occurred
  } else {
    console.log(data); // successful response
  }
});
