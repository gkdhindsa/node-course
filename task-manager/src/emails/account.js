var api_key = process.env.MAILGUN_API_KEY;
var domain = '';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'nehmatundi@gmail.com',
  to: 'nehmatundi@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};
 
mailgun.messages().send(data, function (error, body) {
  console.log(body);
});