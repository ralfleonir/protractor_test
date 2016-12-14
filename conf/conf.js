exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine2',

  verbose: true,

  suites: {
    basic: '../spec/defaultSpec.js',
    log_in: '../spec/logInSpec.js',
    presentialClass: '../spec/presentialClassSpec.js'
  },

  capabilities: {
    // --> firefox is needed to run on CI
    'browserName': 'firefox',
    // --> Please let chrome setup commented before commit the code
    // 
    // 'browserName': 'chrome',
    // 'chromeOptions': {
    //   'args': ['incognito', 'disable-extensions', 'window-size=1280,900', 'enable-crash-reporter-for-testing']
    // },
    'loggingPrefs': {
      'browser': 'ALL'
    }
  },

  //test data
  params: {
    userData: require('../test_data/userData.json'),
    testMessages: require('../test_data/testMessages.json'),
    expectedData: require('../test_data/expectedData.json')
  },

  // Options been passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 10000,
    isVerbose: true,
    includeStackTrace: true
  }
};