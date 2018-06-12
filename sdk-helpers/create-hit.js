/**
 * A very simple script that creates a HIT with an External Question.
 */
const MT = require('./mturk').MT;

const EXPERIMENT_URL =
  'https://trentocrowdai.github.io/mturk-demo/external-question';

const duration = 60;
const description =
  'Choose between Apple or Banana based on your personal preferences for a quick snack.';
const lifetime = 5 * 60 * 60;
const reward = 0.01;
const title = '(TEST)Quick survey about Apples vs Bananas';
const keywords = ['image', 'comparison', 'choose'];
const experimentName = '(TEST)ApplesVsBananas';
const question = getExternalQuestionPayload(EXPERIMENT_URL);

let params = {
  AssignmentDurationInSeconds: 30 /* required */,
  Description: description /* required */,
  LifetimeInSeconds: lifetime /* required */,
  Reward: `${reward}` /* required */,
  Title: `${title}` /* required */,
  AutoApprovalDelayInSeconds: 3 * 24 * 60 * 60,
  Keywords: keywords.join(','),
  MaxAssignments: 1,
  Question: `${getExternalQuestionPayload(EXPERIMENT_URL)}`,
  RequesterAnnotation: experimentName
};

MT.createHIT(params, function(err, data) {
  if (err) {
    console.error(err, err.stack); // an error occurred
  } else {
    console.log(data); // successful response
  }
});

function getExternalQuestionPayload(url, frameHeight = 600) {
  return `
    <ExternalQuestion xmlns="http://mechanicalturk.amazonaws.com/AWSMechanicalTurkDataSchemas/2006-07-14/ExternalQuestion.xsd">
      <ExternalURL>${url}</ExternalURL>
      <FrameHeight>${frameHeight}</FrameHeight>
    </ExternalQuestion>
  `;
}
