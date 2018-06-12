const MT = require('./mturk').MT;

const params = {
  HITId: 'HIT ID',
  MaxResults: 50
};

MT.listAssignmentsForHIT(params, (err, data) => {
  if (err) {
    console.error(err, err.stack); // an error occurred
  } else {
    console.log(data); // successful response
  }
});
