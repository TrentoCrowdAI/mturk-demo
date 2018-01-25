const MT = require('./mturk').MT;

const params = {
  HITId: '3Z8UJEJOCZKPF35501PJWY0MRZE93P' /* required */,
  MaxResults: 5
};

MT.listAssignmentsForHIT(params, function(err, data) {
  if (err) {
    console.error(err, err.stack); // an error occurred
  } else {
    console.log(data); // successful response
  }
});
