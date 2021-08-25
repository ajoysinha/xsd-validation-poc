'use strict';

var validator = require('xsd-schema-validator');

module.exports.hello = async (event, context) => {

  const data = event.body
  //console.log(" Event Body is "+data)
  var statusCode, message, flag;

  const validateXML = (data) => {

    return new Promise((resolve, reject) => {

      validator.validateXML(data, 'sample.xsd', function (err, result) {

        if (err) {

          resolve({
            statusCode: 500,
            body: JSON.stringify({
              status: 'FAIL',
              //message: err.message
            }),
          });

        } else {

          resolve({
            statusCode: 200,
            body: JSON.stringify({
              status: 'OK',
              //message: '',

            }),
          });
        }
      })
    });
  }

  return await validateXML(event.body);


  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
