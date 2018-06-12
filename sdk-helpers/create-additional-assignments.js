const MT = require('./mturk').MT;

let params = {
  HITId: '3IH9TRB0FB6MG1KTHRHDLYKSD1I1IW',
  NumberOfAdditionalAssignments: 1
};

MT.createAdditionalAssignmentsForHIT(params, (err, data) => {
  if (err) {
    console.error(err, err.stack); // an error occurred
  } else {
    console.log(data); // successful response
  }
});
