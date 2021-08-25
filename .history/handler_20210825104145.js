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
            statusCode: 200,
            body: JSON.stringify({
              status: 'FAIL',
            }),
          });

        } else {

          resolve({
            statusCode: 200,
            body: JSON.stringify({
              status: 'OK',
            }),
          });
        }
      })
    });
  }

  return await validateXML(event.body);
};
