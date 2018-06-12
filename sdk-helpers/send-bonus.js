const MT = require('./mturk').MT;

const payload = {
  AssignmentId: 'assignment id',
  BonusAmount: `amount`,
  Reason: 'Reward based on the number of answers given',
  WorkerId: 'worker id'
};
MT.sendBonus(payload, (err, data) => {
  if (err) {
    console.error(err, err.stack); // an error occurred
  } else {
    console.debug('Bonus sent!');
    console.log(data); // successful response
  }
});
