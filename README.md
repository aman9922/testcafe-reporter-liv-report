# testcafe-reporter-reportportal
[![Build Status](https://travis-ci.org/redfox256/testcafe-reporter-reportportal.svg)](https://travis-ci.org/redfox256/testcafe-reporter-reportportal)

This is the **reportportal** reporter plugin for [TestCafe](http://devexpress.github.io/testcafe).



## Install

```
npm install testcafe-reporter-liv-report
```

## Usage

When you run tests from the command line, specify the reporter name by using the `--reporter` option:

```
testcafe chrome 'path/to/test/file.js' --reporter liv-report
```

- cd into your project.
- Edit or create the .env file by adding the following required variables:

```
REPORT_PORTAL_BASE_URL=http://example.com
REPORT_PORTAL_TOKEN=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
REPORT_PORTAL_PROJECT_NAME=My_Demo
# Launch name is optional, if not specified the name will default to the project name
REPORT_PORTAL_LAUNCH_NAME=The Launch Name
# Tags are optional, should be separated by coma
REPORT_PORTAL_TAGS=Tag1, Tag2
# Description is optional
REPORT_PORTAL_DESCRIPTION=Run description
```


When you use API, pass the reporter name to the `reporter()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('chrome')
    .reporter('reportportal') // <-
    .run();
```
