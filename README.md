# testcafe-reporter-liv-report

This is the reporter plugin for [TestCafe](http://devexpress.github.io/testcafe).



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
DASHBOARD_URL=http://example.com
DASHBOARD_TOKEN=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
PROJECT_NAME=My_Demo
ENVIRONMENT=Env_name
```


When you use API, pass the reporter name to the `reporter()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('chrome')
    .reporter('liv-report') // <-
    .run();
```
