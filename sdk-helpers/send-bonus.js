const MT = require('./mturk').MT;

const payload = {
  AssignmentId: '3DH6GAKTYZW8NHI0JMHAN0U8R6NYZA',
  BonusAmount: `1.5`,
  Reason: 'Reward based on the number of answers given',
  WorkerId: 'A2M77QIRWUYHNW'
};
MT.sendBonus(payload, (err, data) => {
  if (err) {
    console.error(err, err.stack); // an error occurred
  } else {
    console.debug('Bonus sent!');
    console.log(data); // successful response
  }
});
