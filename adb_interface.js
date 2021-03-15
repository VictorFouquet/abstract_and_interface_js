const Interface = require('./interface');

module.exports = new Interface(
    'ADBInterface',
    'getDevicesList',
    'switchDeviceToRecoveryMode',
    'sendBuildToDevice',
    'pushJsonSetupToDevice',
    'sendSetupAPKToDevice',
    'sendIntentToDevice'
)