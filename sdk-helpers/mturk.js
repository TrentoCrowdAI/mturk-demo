const AWS = require('aws-sdk');
const config = require('./config.json');

exports.MT = new AWS.MTurk({
  endpoint: config.endpoint,
  ...config.credentials
});
