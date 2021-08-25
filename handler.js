'use strict';

const Libxml = require('node-libxml');
let libxml = new Libxml();

module.exports.hello = async (event, context) => {

  let statuscode, message;
  const data = event.body
  let xmlIsWellformedStr = libxml.loadXmlFromString(data);
  libxml.loadSchemas(['sample.xsd']);
  let xmlIsValid = libxml.validateAgainstSchemas();

  if (xmlIsValid) {
    statuscode = '200'
    message = 'OK'
  } else {
    statuscode = '200'
    message = 'FALSE'
  }

  let response = {
    statusCode: statuscode,
    body: JSON.stringify(message)
    };
    console.log("response: " + JSON.stringify(response))
    return response;
 
};
