const axios = require('axios');
var FormData = require('form-data');

//const url = 'http://localhost:5000/posts/add';
const url = process.env.DASHBOARD_URL + '/add';

module.exports = async function (projectName, environment, build, fixtureName, stepName, status, durationMs, screenShotArr, errorArr) {
    // try {
    console.log('*******************************' + projectName, environment, build, fixtureName, stepName, status, durationMs, screenShotArr, errorArr);
    var bodyFormData = new FormData();
    bodyFormData.append('projectName', projectName);
    bodyFormData.append('environment', environment);
    bodyFormData.append('build', build);
    bodyFormData.append('fixtureName', fixtureName);
    bodyFormData.append('stepName', stepName);
    bodyFormData.append('status', status);
    bodyFormData.append('durationMs', durationMs);
    bodyFormData.append('screenShotArr', JSON.stringify(screenShotArr));
    bodyFormData.append('errorArr', JSON.stringify(errorArr));
    console.log(url + '*******************************');
    //console.log('*******************************' + projectName, environment, build, fixtureName, stepName, status, durationMs, screenShotArr, errorArr);
    // axios.post(url, { 'projectName': projectName, 'environment': environment, 'build': build, 'fixtureName': fixtureName, 'stepName': stepName, 'status': status, 'durationMs': durationMs, 'screenShotArr': screenShotArr, 'errorArr': errorArr, 'tags': tags })
    // .catch(err => console.log('Not able to post test through api', err));
    //     axios.post('http://localhost:5000/posts/add', { 'projectName': projectName, 'environment': environment, 'build': build, 'fixtureName': fixtureName, 'stepName': stepName, 'status': status, 'durationMs': durationMs, 'screenShotArr': screenShotArr, 'errorArr': errorArr })
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(err => console.log('Not able to post test through api', err));
    // }
    // catch (error) {
    //     console.log(error.message + '111111111111111111111111111111111111111');
    // }
    axios({
        method: 'post',
        url: 'http://localhost:5000/posts/add',
        data: bodyFormData,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

};
