const MT = require('./mturk').MT;

const params = {
  AssignmentId: 'ASSIGNMENT ID'
};

MT.getAssignment(params, function(err, data) {
  if (err) {
    console.error(err, err.stack); // an error occurred
  } else {
    console.log(data); // successful response
  }
});
