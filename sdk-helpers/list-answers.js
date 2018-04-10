const MT = require('./mturk').MT;

const params = {
  HITId: '3I7KR83SNAKVB1DCL7HIDKHO3GN9KE',
  MaxResults: 5
};

MT.listAssignmentsForHIT(params, function(err, data) {
  if (err) {
    console.error(err, err.stack); // an error occurred
  } else {
    console.log(data); // successful response
  }
});
