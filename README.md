# WebdriverIO
WebdriverIO is an open source e2e test automation utility for nodejs.



## Installation:

Please install <a href="http://nodejs.org/">Node.js</a> and <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html">Java Development Kit (JDK)</a> (Selenium Server is a Java application).

### Step 1 - Create empty `package.json` file:

```js
npm init -y
```

### Step 2 - Install WebdriverIO:

```js
npm install webdriverio --save-dev
```

### Step 3 - generate WebdriverIO config file:

Now you need to define a configuration file where all information about your tests, capabilities and settings are set. A question interface pops up. It will help to create the config easy and fast. If you are not sure what to answer follow this answers:

Q: Where do you want to execute your tests?
A: On my local machine

Q: Which framework do you want to use?
A: mocha

Q: Shall I install the framework adapter for you?
A: Yes (just press enter)

Q: Where are your test specs located?
A: ./test/specs/*/.js (just press enter)

Q: Which reporter do you want to use?
A: spec (use up/down arrow to navigate and press space bar to select and enter)

Q: Shall I install the reporter library for you?
A: Yes (just press enter)

Q: Do you want to add a service to your test setup?
A: selenium-standalone (use up/down arrow to navigate and press space bar to select and enter)

Q: Shall I install the service for you?
A: Yes (just press enter)

Q: Level of logging verbosity:
A: verbose (use up/down arrow to navigate and press space bar to select and enter)

Q: In which directory should screenshots gets saved if a command fails?
A: ./errorShots/ (just press enter)

Q: What is the base url?
A: http://localhost (just press enter)

That’s it! The configurator now installs all required packages for you and creates a config file with the name `wdio.conf.js`. 

```js
./node_modules/.bin/wdio config
```

<img alt="wdio configuration" src="https://raw.githubusercontent.com/nazmulb/webdriver.io/master/images/configuration.png" width="900px" />


### Step 4 - Install Chai assertion library:

```js
npm install chai --save
```

### Step 5 - Add script in `package.json` file to execute the test runner:

```js
"scripts": {
    "test": "./node_modules/.bin/wdio wdio.conf.js"
}
```

### Step 6 - Update configuration in `wdio.conf.js` file:

```js

// use chrome browser
capabilities: [{
    browserName: 'chrome'
}]

// set the path for selenium log file
seleniumLogs: './logs/selenium.log',

// set TDD language for chai
mochaOpts: {
    ui: 'tdd'
}

// set up chai
before: function (capabilities, specs) {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
}

```    

### Step 7 - Create a test folder and a spec file:

```js
mkdir -p ./test/specs
touch ./test/specs/test.js
```

### Step 7 - Add some sample code in the `test.js` file:

```js
suite('my awesome website', function() {
    test('should do some chai assertions', function() {
        browser.url('https://nazmulb.wordpress.com/');
        browser.getTitle().should.be.equal('Nazmul Basher\'s Website | Personal website of Md. Nazmul Basher');
    });
});
```

The last step is to execute the test runner. To do so just run:

```js
npm test
```

Done :)