/**
 * Reads the file worker-bonus.json and sends a notification to all
 * the workers in the file.
 *
 * workers-bonus.json format:
 *
 * [
 *  {
 *    "workerTurkId": "A2S834OFASDFASDF",
 *    "assignmentTurkId": "3PMBY0YE28G680AJDK4EGASDFASWER",
 *     "hitId": "3WKGUBL7SZZWRE0ASDFAWERWEFW",
 *    "reward": 1.5
 *  }
 * ]
 */
const MT = require('./mturk').MT;
const workers = require('./workers-bonus.json');

var params = {
  MessageText: `
    Message
    `,
  Subject: 'Subject',
  WorkerIds: workers.map(w => w.workerTurkId)
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
