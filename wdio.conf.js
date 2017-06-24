exports.config = {
  specs: [
        './spec/*.spec.js'
      ],
  baseUrl: 'https://javou-10-agenda.herokuapp.com',
  capabilities: [{
        browserName: 'chrome'
    }],
  waitforTimeout: 10000,
  reporters: ['spec'],
  coloredLogs: true,
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 9999999
  }
}
