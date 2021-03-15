class AbstractADB {
    constructor() {
        if (this.constructor === AbstractADB) {
            throw new TypeError(
                'Abstract class "AbstractADB" cannot be directly instantiated'
            )
        }
    }

    getDevicesList() {
        /**
         * @returns {array[string]}
         */
    }

    switchDeviceToRecoveryMode(device) {
        /**
         * @param {object} device
         */
    }

    sendBuildToDevice(buildPath, device) {
        /**
         * @param {string} buildPath
         * @param {object} device
         */
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
    }

    sendIntentToDevice(intent, device) {
        /**
         * @param {string} intent
         * @param {object} device
         */
    }
}

module.exports = AbstractADB