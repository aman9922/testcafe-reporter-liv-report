const axios = require('axios');

//const url = 'http://localhost:5000/posts/add';
const url = process.env.DASHBOARD_URL + '/posts/add';

module.exports = async function (projectName, environment, build, fixtureName, stepName, status, durationMs, screenShotArr, errorArr) {
    //try {
    //console.log(url + '*******************************');
    //console.log('*******************************' + projectName, environment, build, fixtureName, stepName, status, durationMs, screenShotArr, errorArr);
    //console.log( process.env.CONTENTTYPE, process.env.AUTHORIZATION);
    // axios.post(url, { 'projectName': projectName, 'environment': environment, 'build': build, 'fixtureName': fixtureName, 'stepName': stepName, 'status': status, 'durationMs': durationMs, 'screenShotArr': screenShotArr, 'errorArr': errorArr, 'tags': tags })
    // .catch(err => console.log('Not able to post test through api', err));

    // axios.post(url, { 'projectName': projectName, 'environment': environment, 'build': build, 'fixtureName': fixtureName, 'stepName': stepName, 'status': status, 'durationMs': durationMs, 'screenShotArr': screenShotArr, 'errorArr': errorArr }, { headers:{ 
    //     'Content-Type': process.env.CONTENTTYPE, 
    //     'Authorization': process.env.AUTHORIZATION 
    // } }).catch(function (error) {
    //     // handle error
    //     console.log(error);
    // });

    axios({
        method: 'post',
        url: url,
        data: { 'projectName': projectName, 'environment': environment, 'build': build, 'fixtureName': fixtureName, 'stepName': stepName, 'status': status, 'durationMs': durationMs, 'screenShotArr': screenShotArr, 'errorArr': errorArr },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        headers: {
            'Content-Type': process.env.CONTENTTYPE,
            'Authorization': process.env.AUTHORIZATION,
            'Connection': 'keep-alive'
        }
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    // }
    // catch (error) {
    //     console.log('Error while calling API');
    //     //console.log(error.message);
    // }


};

