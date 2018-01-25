# sdk-helpers

Scripts illustrating usage of the MTURK SDK.

## Requirements

The only requirement of this application is the Node Package Manager. All other
dependencies (including the AWS SDK for Node.js) can be installed with:

```
 $ npm install
```

Your version of Node should support ES2015.

## Basic Configuration

Create a `config.json` file based on `config.json.example`. You need to set up your AWS security credentials before running the examples.

## Running the demo

For instance, if you want to run the [List HITs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/MTurk.html#listHITs-property) script all you need to do is:

```
 $ node list-hits.js
```
