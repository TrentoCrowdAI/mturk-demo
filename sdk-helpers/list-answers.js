const MT = require('./mturk').MT;

const params = {
  HITId: 'HIT ID',
  MaxResults: 10
};

MT.listAssignmentsForHIT(params, function(err, data) {
  if (err) {
    console.error(err, err.stack); // an error occurred
  } else {
    console.log(data); // successful response
  }
});
