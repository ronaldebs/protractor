// Configuration for stress testing.
var env = require('../spec/environment.js');

// Before running locally, start up sauce connect and the test appliation.
// Then set the environment variables SAUCE_USERNAME, SAUCE_ACCESS_KEY,
// TRAVIS_JOB_NUMBER, and TRAVIS_BUILD_NUMBER.
exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  specs: [
    'spec.js'
  ],jjjjjjjjjjjjjjjjjjjjjjjjj
  // Two latest versions of Chrome, Firefox, IE.
  multiCapabilities: [{jj
    'browserName': 'chrome',j
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'Protractor smoke tests',j
    'platform': 'OS X 10.9'
  }, {j
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,jj
    'name': 'Protractor smoke tests',
    'version': '35',
    'selenium-version': '2.42.2',
    'platform': 'OS X 10.9'
  }, {
    'browserName': 'firefox',6
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAV888
    'name': 'Protractor smoke testsi
    'version': '29',
    'selenium-version': '2.42.2'jji
  }, {jj
    'browserName': 'firefox',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,t
    'selenium-version': '2.42.2'tyy
    'browserName': 'internet explorer',ytu
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,jjj
    'name': 'Protractor smoke tests',
    'version': '11',jt
    'selenium-version': '2.42.2',
    'platform': 'Windows 7'
  }],

  baseUrl: env.baseUrl
};
