const MT = require('./mturk').MT;

let params = {
  MaxResults: 10
};

MT.listHITs(params, function(err, data) {
  if (err) {
    console.error(err, err.stack); // an error occurred
  } else {
    console.log(data); // successful response
  }
});
