const express = require('express');
const app = express();
const credentials = require('./credentials');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const OAuth = require('oauth');
const twitter = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  credentials.twitter_api_key,
  credentials.twitter_api_secret,
  '1.0A',
  null,
  'HMAC-SHA1'
);

app.use(bodyParser.text());
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);


app.post('/twitter/user_timeline', upload.array(), function(req, res, next) {
  twitter.get(
    'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' + encodeURIComponent(req.body) + "&count=30",
    credentials.twitter_access_token,
    credentials.twitter_token_secret,
    function(e, data, r) {
      res.send(data);
    });
});
