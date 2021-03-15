const child_process = require('child_process');

const Interface = require('./interface')
const InterfaceADB = require('./adb_interface')
const AbstractADB = require('./adb_abstract')

class ADB extends AbstractADB {
    constructor() {
        super()
        Interface.checkImplements(this, InterfaceADB)
    }

    getDevicesList() {
        /**
         * @returns {array[string]}
         */
        return child_process.execSync('adb devices -l')
            .split('\n')
            .filter(line => line.length > 0)
    }

    switchDeviceToRecoveryMode(device) {
        /**
         * @param {object} device
         */
        child_process.execSync(`adb -s ${device.usb} reboot recovery`)
    }

    sendBuildToDevice(buildPath, device) {
        /**
         * @param {string} buildPath
         * @param {object} device
         */
        child_process.execSync(`adb -s ${device.usb} sideload ${buildPath}`)
    }

    pushJsonSetupToDevice(jsonSetupPath, device) {
        /**
         * @param {string} jsonSetupPath
         * @param {object} device
         */
        child_process.execSync(`adb -s ${device.usb} push ${jsonSetupPath} /sdcard/`)
    }

    sendSetupAPKToDevice(apkPath, device) {
        /**
         * @param {string} apkPath
         * @param {object} device
         */
    }

    sendIntentToDevice(intent, device) {
        /**
         * @param {string} intent
         * @param {object} device
         */
    }
}

let adb = new ADB()