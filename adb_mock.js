const child_process = require('child_process');

const Interface = require('./interface')
const InterfaceADB = require('./adb_interface')
const AbstractADB = require('./adb_abstract')

class ADBMock extends AbstractADB {
    constructor() {
        super()
        Interface.checkImplements(this, InterfaceADB)
    }

    getDevicesList() {
        /**
         * @returns {array[string]}
         */
        return [
            "e5af479a       device usb:1-11 product:conen model:2.1 transport_id:1",
            "e5af479b       device usb:1-11 product:conen model:2.1 transport_id:2",
            "e5af479c       device usb:1-11 product:conen model:2.1 transport_id:3",
            "e5af479d       device usb:1-11 product:conen model:2.1 transport_id:4",
        ]
    }

    switchDeviceToRecoveryMode(device) {
        /**
         * @param {object} device
         */
        setTimeout(() => device.isRebooting = true, 500)
    }

    sendBuildToDevice(buildPath, device) {
        /**
         * @param {string} buildPath
         * @param {object} device
         */
        setTimeout(() => device.buildOnDate = true, 5000)
    }

    pushJsonSetupToDevice(jsonSetupPath, device) {
        /**
         * @param {string} jsonSetupPath
         * @param {object} device
         */
    }

    sendSetupAPKToDevice(apkPath, device) {
        /**
         * @param {string} apkPath
         * @param {object} device
         */
        setTimeout(() => device.hasSetupApk = true, 500)
    }

    sendIntentToDevice(intent, device) {
        /**
         * @param {string} intent
         * @param {object} device
         */
        setTimeout(() => device.masterisationStarted = true, 500)
    }
}