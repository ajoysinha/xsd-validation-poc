'use strict';

var validator = require('xsd-schema-validator');

module.exports.hello = async (event,context) => {

  const data = event.body
  //console.log(" Event Body is "+data)

  validator.validateXML(data, 'sample.xsd', function(err, result) {
    if (err) {
      console.log(" validation data is >> "+err.message); 

      return {
        statusCode: 400,
        body: JSON.stringify(
          {
            result: 'failed',
            message: 'Schema Validation Failed !!',
          },
          null,
          2
        ),
      };
    } else {
      console.log(" resultis "+result)
      
    }
  
  });

  return {
        
    statusCode: 200,
    body: JSON.stringify(
      {
        result: 'OK',
        message: 'Schema Validation Passed !!',
      },
      null,
      2
    ),
  };
  

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
