# WebdriverIO
WebdriverIO is an open source e2e test automation utility for nodejs.

```js

npm init

npm install webdriverio --save-dev

./node_modules/.bin/wdio config

npm install chai --save

"scripts": {
    "test": "./node_modules/.bin/wdio wdio.conf.js"
}

capabilities: [{
    browserName: 'chrome'
}]

seleniumLogs: './logs/selenium.log',

mochaOpts: {
    ui: 'tdd'
}

before: function (capabilities, specs) {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
}

```    
