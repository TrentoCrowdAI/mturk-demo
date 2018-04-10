/**
 * Reads the file worker-bonus.json and sends a bonus to
 * each worker in that file.
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

const payWorkers = async () => {
  for (w of workers) {
    console.log(`Paying worker: ${w.workerTurkId}`);
    const payload = {
      AssignmentId: w.assignmentTurkId,
      BonusAmount: `${w.reward}`,
      Reason: `Reward for "Classification of scientific papers based on title and abstract"`,
      WorkerId: w.workerTurkId
    };

    await new Promise((resolve, reject) => {
      MT.sendBonus(payload, (err, data) => {
        if (err) {
          console.error(err, err.stack); // an error occurred
          reject(err);
        } else {
          console.log('Bonus sent!');
          console.log(data); // successful response
          resolve(data);
        }
      });
    });
  }
};

payWorkers();
