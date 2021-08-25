'use strict';

var validator = require('xsd-schema-validator');

module.exports.hello = async (event,context) => {

  const data = event.body
  console.log(" Event Body is "+data)

  var flag = validator.validateXML(data, 'sample.xsd', function(err, result) {
    if (err) {
      throw err;
    }
  
    console.log(" validation data is >> "+result.valid); 
    return result.valid;
  });


  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
