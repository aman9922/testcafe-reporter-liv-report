const axios = require('axios');

//const url = 'http://localhost:5000/posts/add';
const url = process.env.DASHBOARD_URL + '/add';

module.exports = async function (projectName, environment, build, fixtureName, stepName, status, durationMs, screenShotArr, errorArr) {
    try {
        console.log(url + '*******************************');
        //console.log('*******************************' + projectName, environment, build, fixtureName, stepName, status, durationMs, screenShotArr, errorArr);
        // axios.post(url, { 'projectName': projectName, 'environment': environment, 'build': build, 'fixtureName': fixtureName, 'stepName': stepName, 'status': status, 'durationMs': durationMs, 'screenShotArr': screenShotArr, 'errorArr': errorArr, 'tags': tags })
        // .catch(err => console.log('Not able to post test through api', err));
       // axios.post('http://localhost:5000/posts/add', { 'projectName': projectName, 'environment': environment, 'build': build, 'fixtureName': fixtureName, 'stepName': stepName, 'status': status, 'durationMs': durationMs, 'screenShotArr': screenShotArr, 'errorArr': errorArr });
        axios({
            method: 'post',
            url: 'http://localhost:5000/posts/add',
            data: { 'projectName': projectName, 'environment': environment, 'build': build, 'fixtureName': fixtureName, 'stepName': stepName, 'status': status, 'durationMs': durationMs, 'screenShotArr': screenShotArr, 'errorArr': errorArr },
            maxContentLength: Infinity,
            maxBodyLength: Infinity
        });
    }
    catch (error) {
        //console.log(error.message);
        console.log('Error while calling API');
    }


};

