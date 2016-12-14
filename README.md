# Simple Protractor test framework

## Frameworks: 

- End to End automation tests will be performed using:
  * [Protractor](https://angular.github.io/protractor/#/)
  * [Page Objects pattern](https://angular.github.io/protractor/#/page-objects)
  * [Jasmine](http://jasmine.github.io/) 
  * [Elementor](https://github.com/andresdominguez/elementor) as additional tool

### Setting up your environment

- Before all: To run protractor you need [Selenium](http://www.seleniumhq.org/projects/webdriver/), which needs [Java](https://www.java.com/en/download/), which needs [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

  * [nodeJS setup](https://nodejs.org/en/)
  * [Protractor setup](https://angular.github.io/protractor/#/)
  * [Elementor setup](https://github.com/andresdominguez/elementor) - optional
 
### Extra
  * [Protractor video tutorial](https://www.youtube.com/watch?v=57134cHJlAs&list=PL_noPv5wmuO-mnEq8Sf0h43QRk-Gk2Cvb)

### Executing the tests:

- First you'll need a standalone Selenium Server running
  * on the project root run: `webdriver-manager start`

- Then you can run the tests 

  * navigate to the conf folder and run `protractor conf.js`

### Executing the tests with Grunt

- It's required:
  * NodeJS [see more](https://nodejs.org/en/)
  * Grunt [see more](http://gruntjs.com/getting-started)

- After that, in the root folder run:

`npm install`

This will install everything necessarily for Grunt to execute the tests.

- With everything done, just run:

`grunt test`

- Tests will run in *Firefox*. 

If there are any problems, check if you have a compatible version of that browser with selenium-server-standalone. Otherwise it will be necessarily to edit the option *downloadUrl* in the file *grunt/start-selenium-server.js* and point to the correct url of the *.jar* file that is compatible with yours Firefox version.
