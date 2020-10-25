const runtime = require("@xesam/miniapp");

function get(options) {
    return new Promise((resolve, reject) => {
        runtime.host.getLocation({
            type: options.type,
            success(res) {
                resolve({
                    type: options.type,
                    ...res
                });
            },
            fail(res) {
                reject(res);
            }
        });
    });
}

const DEFAULT_TYPE = 'wgs84';
const THROTTLE_INTERVAL = 180000;

let LAST_CACHE = {
    time: 0,
    location: {}
};

function updateCache(location) {
    LAST_CACHE.time = Date.now();
    LAST_CACHE.location = location;
    return LAST_CACHE.location;
}

function checkLocation(location) {
    return location && location.type;
}

function getLocationSync() {
    return LAST_CACHE.location;
}

function getLocation() {
    return get({type: DEFAULT_TYPE})
        .then(updateCache);
}

function checkThrottle() {
    return Date.now() - LAST_CACHE.time >= THROTTLE_INTERVAL;
}

function getThrottleLocation() {
    if (checkThrottle()) {
        return getLocation();
    } else {
        return Promise.resolve(LAST_CACHE.location);
    }
}

export default {
    checkLocation,
    getLocation,
    getLocationSync,
    getThrottleLocation
}