'use strict';

var validator = require('xsd-schema-validator');

module.exports.hello = async (event, context) => {

  const data = event.body
  //console.log(" Event Body is "+data)
  var statusCode, message, flag;

  validator.validateXML(data, 'sample.xsd', function (err, result) {
    if (err) {
      console.log(" validation data is >> " + err.message);
      statusCode = '400'
      message = 'Schema Validation Failed !!'
      flag = 'NOT OK'

    } else {
      console.log(" resultis " + result)
      statusCode = '200'
      message = 'Schema Validation Passed !!'
      flag = 'OK'
    }

  });

  return {

    statusCode: statusCode,
    body: JSON.stringify(
      {
        result: flag,
        message: message,
      },
      null,
      2
    ),
  };


  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
