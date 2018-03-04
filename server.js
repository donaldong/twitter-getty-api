const express = require('express');
const app = express();
const credentials = require('./credentials');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const OAuth = require('oauth');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
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

app.post('/getty_images/search', upload.array(), function (req, res, next) {
  const url = 'https://api.gettyimages.com/v3/search/images?' +
    'embed_content_only=true&fields=comp&graphical_styles=photography&minimum_size=xx_large&' +
    'sort_order=most_popular&phrase=' + encodeURIComponent(req.body);
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.setRequestHeader("Api-Key", credentials.getty_images_key);
  http.onreadystatechange = function() {
    if (http.readyState === 4 && http.status === 200) {
      res.send(this.responseText);
    }
  };
  http.send();
});

app.post('/twitter/user_timeline', upload.array(), function(req, res, next) {
  twitter.get(
    'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' + encodeURIComponent(req.body) + "&count=30",
    credentials.twitter_access_token,
    credentials.twitter_token_secret,
    function(e, data, r) {
      res.send(data);
    });
});
