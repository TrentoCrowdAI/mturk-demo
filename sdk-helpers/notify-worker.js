const MT = require('./mturk').MT;

var params = {
  MessageText: 'testing message' /* required */,
  Subject: 'just testing' /* required */,
  WorkerIds: ['worker id']
};

MT.notifyWorkers(params, (err, data) => {
  console.log('Notifying workers');

  if (err) {
    console.error(err, err.stack); // an error occurred
  } else {
    console.log('done!');
    console.log(data); // successful response
  }
});
