var browser = require('webdriverio');
var options = {
  desiredCapabilities: {
    browserName: 'firefox'
  },
  reporters: ['spec']
};

var client = browser
.remote(options)
.init()
.url('http://www.google.com')
.pause(3000);

client.getTitle().then(function(title) {
  console.log('Title was: ' + title);
}).end();
